import { supabase } from '../lib/supabase'
import type { User, UserProfile, Alert } from '../lib/supabase'
import { useAuth as useClerkAuth } from '@clerk/clerk-react'

// Define the interface locally to avoid import issues
export interface ScoreCalculationResult {
  score: number
  timeline: string
  factors: {
    automationExposure: number
    sectorRisk: number
    experienceBuffer: number
    adaptabilityScore: number
  }
  recommendations: string[]
  explanation: string
}

export interface UserWithProfile extends User {
  profile?: UserProfile
}

// Helper function to get Clerk user ID (used by service functions)
const getClerkUserId = async (): Promise<string | null> => {
  try {
    // This will be called from components that have access to Clerk
    // For now, return null and handle in components
    return null
  } catch (error) {
    console.error('Error getting Clerk user ID:', error)
    return null
  }
}

export const userService = {
  // Get current user with profile
  // Note: This now requires userId from Clerk to be passed
  // This function automatically creates a user record in Supabase if it doesn't exist
  async getCurrentUser(userId?: string, email?: string): Promise<UserWithProfile | null> {
    try {
      // If no userId provided, return default structure for Clerk user
      if (!userId) {
        // Return a default structure that works with Clerk
        return {
          id: '',
          email: email || '',
          current_plan: 'sentinelle',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          profile: undefined
        } as UserWithProfile
      }

      // Try to fetch from Supabase using Clerk user ID
      const { data: userData, error } = await supabase
        .from('users')
        .select(`
          *,
          profile:user_profiles(*)
        `)
        .eq('id', userId)
        .single()

      if (error && error.code !== 'PGRST116') {
        // PGRST116 is "not found" - which is OK for new users
        console.error('Error fetching user from Supabase:', error)
      }

      // If user exists in Supabase, return it
      if (userData) {
        return userData as UserWithProfile
      }

      // User doesn't exist in Supabase - create it automatically
      const { data: newUser, error: createError } = await supabase
        .from('users')
        .insert({
          id: userId,
          email: email || '',
          current_plan: 'sentinelle',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select(`
          *,
          profile:user_profiles(*)
        `)
        .single()

      if (createError) {
        console.error('Error creating user in Supabase:', createError)
        // Return default structure even if creation fails
        return {
          id: userId,
          email: email || '',
          current_plan: 'sentinelle',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          profile: undefined
        } as UserWithProfile
      }

      // Return the newly created user
      return newUser as UserWithProfile
    } catch (error) {
      console.error('Error fetching/creating current user:', error)
      return null
    }
  },

  // Update user profile
  // Note: This now requires userId from Clerk to be passed
  async updateProfile(profileData: Partial<UserProfile>, userId?: string): Promise<{ error?: string }> {
    try {
      if (!userId) {
        return { error: 'User ID is required' }
      }

      const { error } = await supabase
        .from('user_profiles')
        .upsert({
          id: userId,
          ...profileData,
          last_score_calculation: new Date().toISOString()
        })

      if (error) {
        console.error('Error updating profile:', error)
        return { error: error.message }
      }

      return {}
    } catch (error) {
      console.error('Error updating profile:', error)
      return { error: 'Failed to update profile' }
    }
  },

  // Calculate and save AI risk score
  async calculateAndSaveScore(userId?: string): Promise<{ 
    error?: string; 
    score?: ScoreCalculationResult 
  }> {
    try {
      if (!userId) {
        return { error: 'User ID is required' }
      }

      const user = await this.getCurrentUser(userId)
      if (!user || !user.profile) {
        return { error: 'User profile not found' }
      }

      const profile = user.profile
      if (!profile.job_title || !profile.sector || !profile.years_experience || !profile.automation_exposure) {
        return { error: 'Profile incomplete - missing required fields' }
      }

      // Simple score calculation (fallback when OpenAI is not available)
      const score = Math.min(100, Math.max(0, 
        (profile.automation_exposure * 10) + 
        (profile.sector === 'Tech' ? 45 : profile.sector === 'Finance' ? 70 : 50) +
        Math.max(0, 20 - profile.years_experience * 2)
      ))

      const scoreResult: ScoreCalculationResult = {
        score,
        timeline: score > 70 ? "6-12 mois" : score > 50 ? "1-2 ans" : "2-3 ans",
        factors: {
          automationExposure: profile.automation_exposure * 10,
          sectorRisk: profile.sector === 'Tech' ? 45 : profile.sector === 'Finance' ? 70 : 50,
          experienceBuffer: Math.max(0, 20 - profile.years_experience * 2),
          adaptabilityScore: 30
        },
        recommendations: [
          "Développer des compétences en supervision IA",
          "Se former aux outils de collaboration homme-IA",
          "Explorer des métiers complémentaires"
        ],
        explanation: `Votre métier présente un risque ${score > 70 ? 'élevé' : score > 50 ? 'modéré' : 'faible'} d'automatisation.`
      }

      // Save score to database
      const { error } = await supabase
        .from('user_profiles')
        .update({
          ai_risk_score: scoreResult.score,
          last_score_calculation: new Date().toISOString()
        })
        .eq('id', user.id)

      if (error) {
        console.error('Error saving score:', error)
        return { error: error.message }
      }

      return { score: scoreResult }
    } catch (error) {
      console.error('Error calculating score:', error)
      return { error: 'Failed to calculate score' }
    }
  },

  // Get user's alerts
  // Note: This now requires userId from Clerk to be passed
  async getUserAlerts(limit = 10, userId?: string): Promise<{ error?: string; alerts?: Alert[] }> {
    try {
      if (!userId) {
        return { alerts: [] } // Return empty array if no user ID
      }

      const { data: alerts, error } = await supabase
        .from('alerts')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) {
        console.error('Error fetching alerts:', error)
        return { error: error.message }
      }

      return { alerts: alerts || [] }
    } catch (error) {
      console.error('Error fetching alerts:', error)
      return { error: 'Failed to fetch alerts' }
    }
  },

  // Mark alert as read
  // Note: This now requires userId from Clerk to be passed
  async markAlertAsRead(alertId: string, userId?: string): Promise<{ error?: string }> {
    try {
      if (!userId) {
        return { error: 'User ID is required' }
      }

      const { error } = await supabase
        .from('alerts')
        .update({ is_read: true })
        .eq('id', alertId)
        .eq('user_id', userId)

      if (error) {
        console.error('Error marking alert as read:', error)
        return { error: error.message }
      }

      return {}
    } catch (error) {
      console.error('Error marking alert as read:', error)
      return { error: 'Failed to mark alert as read' }
    }
  },

  // Update user plan (called by Stripe webhook)
  async updateUserPlan(userId: string, plan: 'sentinelle' | 'bouclier' | 'forteresse'): Promise<{ error?: string }> {
    try {
      const { error } = await supabase
        .from('users')
        .update({ current_plan: plan })
        .eq('id', userId)

      if (error) {
        console.error('Error updating user plan:', error)
        return { error: error.message }
      }

      return {}
    } catch (error) {
      console.error('Error updating user plan:', error)
      return { error: 'Failed to update user plan' }
    }
  },

  // Update Stripe customer ID
  async updateStripeCustomerId(userId: string, customerId: string): Promise<{ error?: string }> {
    try {
      const { error } = await supabase
        .from('users')
        .update({ stripe_customer_id: customerId })
        .eq('id', userId)

      if (error) {
        console.error('Error updating Stripe customer ID:', error)
        return { error: error.message }
      }

      return {}
    } catch (error) {
      console.error('Error updating Stripe customer ID:', error)
      return { error: 'Failed to update Stripe customer ID' }
    }
  },

  // Update Stripe subscription ID
  async updateStripeSubscriptionId(userId: string, subscriptionId: string): Promise<{ error?: string }> {
    try {
      const { error } = await supabase
        .from('users')
        .update({ stripe_subscription_id: subscriptionId })
        .eq('id', userId)

      if (error) {
        console.error('Error updating Stripe subscription ID:', error)
        return { error: error.message }
      }

      return {}
    } catch (error) {
      console.error('Error updating Stripe subscription ID:', error)
      return { error: 'Failed to update Stripe subscription ID' }
    }
  },

  // Check if user can access feature based on plan
  canAccessFeature(user: UserWithProfile | null, feature: string): boolean {
    if (!user) return false

    const planAccess: Record<string, string[]> = {
      'sentinelle': ['score_basic', 'alerts_monthly', 'community_read'],
      'bouclier': ['score_basic', 'alerts_monthly', 'community_read', 'score_detailed', 'alerts_realtime', 'community_write', 'reconversion_plan', 'formations', 'bootcamps'],
      'forteresse': ['score_basic', 'alerts_monthly', 'community_read', 'score_detailed', 'alerts_realtime', 'community_write', 'reconversion_plan', 'formations', 'bootcamps', 'coaching', 'guarantee', 'certifications']
    }

    return planAccess[user.current_plan]?.includes(feature) || false
  },

  // Get user's plan display info
  getPlanInfo(plan: string) {
    const plans = {
      sentinelle: {
        name: 'Sentinelle',
        badge: 'gratuit',
        color: 'bg-gray-100 text-gray-800',
        description: 'Plan de base pour découvrir votre risque IA'
      },
      bouclier: {
        name: 'Bouclier',
        badge: '49€/mois',
        color: 'bg-cyan-100 text-cyan-800',
        description: 'Protection complète avec plan de reconversion'
      },
      forteresse: {
        name: 'Forteresse',
        badge: '99€/mois',
        color: 'bg-yellow-100 text-yellow-800',
        description: 'Protection maximale avec garantie financière'
      }
    }

    return plans[plan as keyof typeof plans] || plans.sentinelle
  }
}

export default userService
