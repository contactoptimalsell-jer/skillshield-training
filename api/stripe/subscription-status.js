import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Get the authorization header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization header required' })
    }

    const token = authHeader.split(' ')[1]

    // Verify the JWT token with Supabase
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    
    if (authError || !user) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    // Get user's subscription info
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('current_plan, stripe_customer_id, stripe_subscription_id')
      .eq('id', user.id)
      .single()

    if (userError) {
      return res.status(500).json({ error: 'Failed to fetch user data' })
    }

    // Return subscription status
    res.status(200).json({
      subscription: {
        id: userData.stripe_subscription_id,
        status: userData.current_plan === 'sentinelle' ? 'inactive' : 'active',
        current_period_end: null, // You could fetch this from Stripe if needed
        cancel_at_period_end: false,
        plan: userData.current_plan
      }
    })
  } catch (error) {
    console.error('Error getting subscription status:', error)
    res.status(500).json({ error: error.message })
  }
}

