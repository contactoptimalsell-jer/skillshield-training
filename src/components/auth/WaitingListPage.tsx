/**
 * Page WaitingList - Version émotionnelle de la page de connexion
 * Utilise EmotionalLoginPage avec les modifications demandées
 */

import React, { useRef } from 'react'
import { EmotionalLoginPage } from './EmotionalLoginPage'

export const WaitingListPage: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null)

  const scrollToEmail = () => {
    if (emailInputRef.current) {
      emailInputRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
      emailInputRef.current.focus()
    }
  }

  return (
    <div>
      {/* Passer la référence et la fonction de scroll à EmotionalLoginPage */}
      <EmotionalLoginPage 
        emailInputRef={emailInputRef}
        scrollToEmail={scrollToEmail}
      />
    </div>
  )
}

