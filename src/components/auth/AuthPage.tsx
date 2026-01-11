import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import { ClerkAuthPage } from './ClerkAuthPage'

export const AuthPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { isSignedIn } = useAuth()
  const plan = searchParams.get('plan')

  // Redirect if already signed in
  useEffect(() => {
    if (isSignedIn) {
      const redirectTo = plan ? `/auth/redirect?plan=${plan}` : '/dashboard'
      navigate(redirectTo, { replace: true })
    }
  }, [isSignedIn, navigate, plan])

  return <ClerkAuthPage />
}
