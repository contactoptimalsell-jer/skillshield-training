import { loadStripe, Stripe } from '@stripe/stripe-js'

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!)

export const getStripe = () => stripePromise

// Stripe configuration
export const STRIPE_CONFIG = {
  BOUCLIER_PRICE_ID: import.meta.env.STRIPE_BOUCLIER_PRICE_ID || 'price_bouclier_test',
  FORTERESSE_PRICE_ID: import.meta.env.STRIPE_FORTERESSE_PRICE_ID || 'price_forteresse_test',
  SUCCESS_URL: `${import.meta.env.VITE_APP_URL}/dashboard?success=true`,
  CANCEL_URL: `${import.meta.env.VITE_APP_URL}/sentinelle/plans?canceled=true`
}

export interface StripeCheckoutParams {
  priceId: string
  customerEmail?: string
  customerId?: string
  metadata?: Record<string, string>
}

export const stripeService = {
  // Create Stripe checkout session
  async createCheckoutSession(params: StripeCheckoutParams): Promise<{ error?: string; sessionId?: string }> {
    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: params.priceId,
          customerEmail: params.customerEmail,
          customerId: params.customerId,
          metadata: params.metadata,
          successUrl: STRIPE_CONFIG.SUCCESS_URL,
          cancelUrl: STRIPE_CONFIG.CANCEL_URL
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      return { sessionId: data.sessionId }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      return { error: error instanceof Error ? error.message : 'Unknown error' }
    }
  },

  // Redirect to Stripe checkout
  async redirectToCheckout(sessionId: string): Promise<{ error?: string }> {
    try {
      const stripe = await stripePromise
      if (!stripe) {
        throw new Error('Stripe not loaded')
      }

      const { error } = await stripe.redirectToCheckout({ sessionId })
      
      if (error) {
        return { error: error.message }
      }

      return {}
    } catch (error) {
      console.error('Error redirecting to checkout:', error)
      return { error: error instanceof Error ? error.message : 'Unknown error' }
    }
  },

  // Create customer portal session
  async createPortalSession(): Promise<{ error?: string; url?: string }> {
    try {
      const response = await fetch('/api/stripe/create-portal-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create portal session')
      }

      return { url: data.url }
    } catch (error) {
      console.error('Error creating portal session:', error)
      return { error: error instanceof Error ? error.message : 'Unknown error' }
    }
  },

  // Get subscription status
  async getSubscriptionStatus(): Promise<{ 
    error?: string; 
    subscription?: {
      id: string
      status: string
      current_period_end: number
      cancel_at_period_end: boolean
      plan: string
    }
  }> {
    try {
      const response = await fetch('/api/stripe/subscription-status', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get subscription status')
      }

      return { subscription: data.subscription }
    } catch (error) {
      console.error('Error getting subscription status:', error)
      return { error: error instanceof Error ? error.message : 'Unknown error' }
    }
  }
}

// Plan configurations
export const PLANS = {
  SENTINELLE: {
    id: 'sentinelle',
    name: 'Sentinelle',
    price: 0,
    currency: 'EUR',
    interval: 'month',
    features: [
      'Score IA de base',
      '1 alerte mensuelle',
      'Communauté (lecture seule)',
      'Support email'
    ],
    limitations: [
      'Pas d\'alertes temps réel',
      'Pas de plan de reconversion',
      'Pas de formations incluses'
    ]
  },
  BOUCLIER: {
    id: 'bouclier',
    name: 'Bouclier',
    price: 49,
    currency: 'EUR',
    interval: 'month',
    priceId: STRIPE_CONFIG.BOUCLIER_PRICE_ID,
    features: [
      'Analyse IA détaillée',
      'Alertes temps réel',
      'Plan de reconversion personnalisé',
      '3 mois de formations incluses',
      'Bootcamps express',
      'Communauté active',
      'Support prioritaire'
    ]
  },
  FORTERESSE: {
    id: 'forteresse',
    name: 'Forteresse',
    price: 99,
    currency: 'EUR',
    interval: 'month',
    priceId: STRIPE_CONFIG.FORTERESSE_PRICE_ID,
    features: [
      'Tout Bouclier +',
      'Garantie de revenu 60% x 6 mois',
      'Assurance impact IA',
      'Coaching 1-to-1 mensuel',
      'Formations illimitées',
      'Certifications incluses',
      'Jobs AI-proof',
      'Support VIP'
    ]
  }
}

export default stripeService

