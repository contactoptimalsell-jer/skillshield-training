import { supabase } from '../lib/supabase'
import type { User, UserProfile, Alert } from '../lib/supabase'

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

export const userService = {
  // Get current user with profile
  async getCurrentUser(): Promise<UserWithProfile | null> {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return null

      const { data: userData } = await supabase
        .from('users')
        .select(`
          *,
          profile:user_profiles(*)
        `)
        .eq('id', user.id)
        .single()

      return userData as UserWithProfile
    } catch (error) {
      console.error('Error fetching current user:', error)
      return null
    }
  },

  // Update user profile
  async updateProfile(profileData: Partial<UserProfile>): Promise<{ error?: string }> {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return { error: 'User not authenticated' }

      const { error } = await supabase
        .from('user_profiles')
        .upsert({
          id: user.id,
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
  async calculateAndSaveScore(): Promise<{ 
    error?: string; 
    score?: ScoreCalculationResult 
  }> {
    try {
      const user = await this.getCurrentUser()
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
  async getUserAlerts(limit = 10): Promise<{ error?: string; alerts?: Alert[] }> {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return { error: 'User not authenticated' }

      const { data: alerts, error } = await supabase
        .from('alerts')
        .select('*')
        .eq('user_id', user.id)
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
  async markAlertAsRead(alertId: string): Promise<{ error?: string }> {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return { error: 'User not authenticated' }

      const { error } = await supabase
        .from('alerts')
        .update({ is_read: true })
        .eq('id', alertId)
        .eq('user_id', user.id)

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
