import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
})

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const sig = req.headers['stripe-signature']
  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return res.status(400).json({ error: `Webhook Error: ${err.message}` })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object)
        break
      
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object)
        break
      
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object)
        break
      
      case 'invoice.payment_succeeded':
        await handleInvoicePaymentSucceeded(event.data.object)
        break
      
      case 'invoice.payment_failed':
        await handleInvoicePaymentFailed(event.data.object)
        break
      
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    res.status(200).json({ received: true })
  } catch (error) {
    console.error('Error handling webhook:', error)
    res.status(500).json({ error: error.message })
  }
}

async function handleCheckoutSessionCompleted(session) {
  try {
    const { customer_email, customer, metadata } = session
    
    // Get subscription details
    const subscription = await stripe.subscriptions.retrieve(session.subscription)
    
    // Determine plan based on price ID
    const plan = getPlanFromPriceId(subscription.items.data[0].price.id)
    
    // Find user by email or customer ID
    let user
    if (customer_email) {
      const { data } = await supabase
        .from('users')
        .select('*')
        .eq('email', customer_email)
        .single()
      user = data
    } else if (customer) {
      const { data } = await supabase
        .from('users')
        .select('*')
        .eq('stripe_customer_id', customer)
        .single()
      user = data
    }

    if (!user) {
      console.error('User not found for checkout session:', session.id)
      return
    }

    // Update user plan and Stripe IDs
    await supabase
      .from('users')
      .update({
        current_plan: plan,
        stripe_customer_id: customer || subscription.customer,
        stripe_subscription_id: subscription.id
      })
      .eq('id', user.id)

    console.log(`User ${user.id} upgraded to ${plan} plan`)
  } catch (error) {
    console.error('Error handling checkout session completed:', error)
  }
}

async function handleSubscriptionUpdated(subscription) {
  try {
    const { customer, status, cancel_at_period_end } = subscription
    
    // Find user by Stripe customer ID
    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('stripe_customer_id', customer)
      .single()

    if (!user) {
      console.error('User not found for subscription:', subscription.id)
      return
    }

    // Determine plan based on status
    const plan = status === 'active' ? getPlanFromPriceId(subscription.items.data[0].price.id) : 'sentinelle'

    // Update user plan
    await supabase
      .from('users')
      .update({
        current_plan: plan,
        stripe_subscription_id: subscription.id
      })
      .eq('id', user.id)

    console.log(`User ${user.id} subscription updated to ${plan}`)
  } catch (error) {
    console.error('Error handling subscription updated:', error)
  }
}

async function handleSubscriptionDeleted(subscription) {
  try {
    const { customer } = subscription
    
    // Find user by Stripe customer ID
    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('stripe_customer_id', customer)
      .single()

    if (!user) {
      console.error('User not found for subscription:', subscription.id)
      return
    }

    // Downgrade to Sentinelle (free plan)
    await supabase
      .from('users')
      .update({
        current_plan: 'sentinelle',
        stripe_subscription_id: null
      })
      .eq('id', user.id)

    console.log(`User ${user.id} downgraded to Sentinelle plan`)
  } catch (error) {
    console.error('Error handling subscription deleted:', error)
  }
}

async function handleInvoicePaymentSucceeded(invoice) {
  try {
    const { customer, subscription } = invoice
    
    if (!subscription) return // Not a subscription invoice

    // Find user by Stripe customer ID
    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('stripe_customer_id', customer)
      .single()

    if (!user) {
      console.error('User not found for invoice:', invoice.id)
      return
    }

    // Update subscription ID if missing
    await supabase
      .from('users')
      .update({
        stripe_subscription_id: subscription
      })
      .eq('id', user.id)

    console.log(`Invoice payment succeeded for user ${user.id}`)
  } catch (error) {
    console.error('Error handling invoice payment succeeded:', error)
  }
}

async function handleInvoicePaymentFailed(invoice) {
  try {
    const { customer } = invoice
    
    // Find user by Stripe customer ID
    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('stripe_customer_id', customer)
      .single()

    if (!user) {
      console.error('User not found for invoice:', invoice.id)
      return
    }

    // You could send an email notification here
    console.log(`Invoice payment failed for user ${user.id}`)
  } catch (error) {
    console.error('Error handling invoice payment failed:', error)
  }
}

function getPlanFromPriceId(priceId) {
  const priceIdMap = {
    [process.env.STRIPE_BOUCLIER_PRICE_ID]: 'bouclier',
    [process.env.STRIPE_FORTERESSE_PRICE_ID]: 'forteresse',
  }
  
  return priceIdMap[priceId] || 'sentinelle'
}

