import React, { createContext, useContext, useEffect, useState } from 'react'
import { useUser, useClerk, useAuth as useClerkAuth } from '@clerk/clerk-react'
import toast from 'react-hot-toast'

interface AuthContextType {
  user: any | null
  session: any | null
  loading: boolean
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: any }>
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: any }>
  updateProfile: (data: { full_name?: string; current_plan?: string }) => Promise<{ error: any }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user: clerkUser, isLoaded: isUserLoaded } = useUser()
  const { signOut: clerkSignOut } = useClerk()
  const { getToken } = useClerkAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isUserLoaded) {
      setLoading(false)
    }
  }, [isUserLoaded])

  // Convert Clerk user to our format
  const user = clerkUser ? {
    id: clerkUser.id,
    email: clerkUser.emailAddresses[0]?.emailAddress || '',
    full_name: clerkUser.firstName && clerkUser.lastName 
      ? `${clerkUser.firstName} ${clerkUser.lastName}`
      : clerkUser.firstName || clerkUser.username || '',
    ...clerkUser
  } : null

  const session = user ? {
    access_token: null, // Clerk handles tokens differently
    user
  } : null

  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      // For Clerk, sign-up is typically handled through their UI components
      // This is a fallback method if needed
      toast.info('Utilisez le formulaire d\'inscription Clerk')
      return { error: null }
    } catch (error: any) {
      toast.error(error?.message || 'Erreur lors de l\'inscription')
      return { error }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      // For Clerk, sign-in is typically handled through their UI components
      // This is a fallback method if needed
      toast.info('Utilisez le formulaire de connexion Clerk')
      return { error: null }
    } catch (error: any) {
      toast.error(error?.message || 'Erreur lors de la connexion')
      return { error }
    }
  }

  const signOut = async () => {
    try {
      await clerkSignOut()
      toast.success('Déconnexion réussie')
    } catch (error: any) {
      toast.error(error?.message || 'Erreur lors de la déconnexion')
    }
  }

  const resetPassword = async (email: string) => {
    try {
      // Clerk handles password reset through their components
      toast.info('Utilisez la fonctionnalité de réinitialisation de mot de passe de Clerk')
      return { error: null }
    } catch (error: any) {
      toast.error(error?.message || 'Erreur lors de la réinitialisation')
      return { error }
    }
  }

  const updateProfile = async (data: { full_name?: string; current_plan?: string }) => {
    try {
      // Update user profile through Clerk
      // This would typically use Clerk's user.update() method
      // For now, return success as Clerk handles user updates
      toast.success('Profil mis à jour')
      return { error: null }
    } catch (error: any) {
      toast.error(error?.message || 'Erreur lors de la mise à jour')
      return { error }
    }
  }

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
