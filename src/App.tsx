import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { ClerkProvider } from '@clerk/clerk-react'
import { AppProvider } from './context/AppContext'
import { DashboardProvider } from './context/DashboardContext'
import { AuthProvider } from './context/AuthContext'
import { CookieProvider } from './context/CookieContext'

// Clerk configuration
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || ''

if (!PUBLISHABLE_KEY) {
  console.warn('Missing Clerk Publishable Key. Please set VITE_CLERK_PUBLISHABLE_KEY in your environment variables.')
}
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { RiskCalculator } from './components/RiskCalculator'
import { RiskCalculatorModal } from './components/RiskCalculatorModal'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { NewsletterSection } from './components/NewsletterSection'
import { Footer } from './components/Footer'
import { NotificationContainer } from './components/Notification'
import { AuthPage } from './components/auth/AuthPage'
import { AuthRedirect } from './components/auth/AuthRedirect'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { OnboardingFlow } from './components/onboarding/OnboardingFlow'
import { DashboardLayout } from './components/dashboard/DashboardLayout'
import { DashboardHome } from './components/dashboard/DashboardHome'
import { ScoreDetails } from './components/dashboard/ScoreDetails'
import { FormationsPage } from './components/dashboard/FormationsPage'
import { FormationDetailPage } from './components/dashboard/FormationDetailPage'
import { WelcomePage } from './components/dashboard/WelcomePage'
// Sentinelle Dashboard imports
import { SentinelleLayout } from './components/sentinelle/SentinelleLayout'
import { SentinelleDashboardHome } from './components/sentinelle/SentinelleDashboardHome'
import { SentinelleScorePage } from './components/sentinelle/SentinelleScorePage'
import { SentinelleAlertsPage } from './components/sentinelle/SentinelleAlertsPage'
import { SentinelleCommunityPage } from './components/sentinelle/SentinelleCommunityPage'
import { SentinellePlansPage } from './components/sentinelle/SentinellePlansPage'
// Other imports
import { WaitlistSuccessPage } from './components/waitlist/WaitlistSuccessPage'
import { LoginPage } from './components/auth/LoginPage'
import { RiskCalculatorPage } from './components/RiskCalculatorPage'
// Legal pages imports
import { TermsPage } from './pages/legal/TermsPage'
import { PrivacyPage } from './pages/legal/PrivacyPage'
import { CookiesPage } from './pages/legal/CookiesPage'
import { GDPRPage } from './pages/legal/GDPRPage'
import { CookieBanner } from './components/legal/CookieBanner'
import { PremiumNavbar } from './components/PremiumNavbar'
import { StatsDemoPage } from './components/dashboard/StatsDemoPage'
import { PragmaticStatsDemoPage } from './components/dashboard/PragmaticStatsDemoPage'
import { WaitingListPage } from './components/auth/WaitingListPage'
import { AdvancedRiskCalculator } from './components/calculator/AdvancedRiskCalculator'
import { ResultsPage } from './pages/ResultsPage'

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Premium Navbar */}
      <PremiumNavbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* How It Works Section */}
      <section className="py-20 lg:py-32">
        <HowItWorks />
      </section>
      
      {/* Risk Calculator Section */}
      <section id="calculator" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306B6D4' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Découvrez votre niveau de risque
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Analysez votre exposition à l'automatisation IA en quelques minutes.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-2xl">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl shadow-cyan-500/10">
                <RiskCalculator />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 bg-gray-50">
        <Pricing />
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <Testimonials />
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <FAQ />
      </section>
      
      {/* Newsletter Section */}
      <section id="blog" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <NewsletterSection source="homepage" />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <CookieProvider>
          <AuthProvider>
            <AppProvider>
              <DashboardProvider>
            <Routes>
              {/* Landing Page Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/landing" element={<LandingPage />} />

              {/* Other Routes */}
              <Route path="/waitinglist" element={<WaitingListPage />} />
              <Route path="/waitlist/success" element={<WaitlistSuccessPage />} />
              <Route path="/risk-calculator" element={<RiskCalculatorPage />} />
              <Route path="/calculator" element={<AdvancedRiskCalculator />} />
              <Route path="/results" element={<ResultsPage />} />

              {/* Login Route */}
              <Route path="/login" element={<LoginPage />} />

                        {/* Legal Pages Routes */}
                        <Route path="/legal/terms" element={<TermsPage />} />
                        <Route path="/legal/privacy" element={<PrivacyPage />} />
                        <Route path="/legal/cookies" element={<CookiesPage />} />
                        <Route path="/legal/gdpr" element={<GDPRPage />} />

                        {/* Demo Pages Routes */}
                        <Route path="/stats-demo" element={<StatsDemoPage />} />
                        <Route path="/pragmatic-stats-demo" element={<PragmaticStatsDemoPage />} />

              {/* Authentication Routes - Using Clerk */}
              <Route path="/signup" element={<AuthPage />} />
              <Route path="/auth" element={<AuthPage />} />
              
              {/* Redirect route for authenticated users */}
              <Route path="/auth/redirect" element={<AuthRedirect />} />

              {/* Onboarding Route */}
              <Route path="/onboarding" element={<OnboardingFlow />} />

              {/* Welcome Page (simulates post-subscription) */}
              <Route path="/welcome" element={<WelcomePage />} />

              {/* Sentinelle Dashboard Routes (Free Plan) */}
              <Route path="/sentinelle" element={
                <ProtectedRoute requiredPlan="sentinelle">
                  <SentinelleLayout />
                </ProtectedRoute>
              }>
                <Route index element={<SentinelleDashboardHome />} />
                <Route path="score" element={<SentinelleScorePage />} />
                <Route path="alertes" element={<SentinelleAlertsPage />} />
                <Route path="communaute" element={<SentinelleCommunityPage />} />
                <Route path="plans" element={<SentinellePlansPage />} />
                <Route path="parametres" element={<div className="text-center py-20"><h2 className="text-2xl font-bold text-primary-900">Paramètres</h2><p className="text-gray-600 mt-4">Page en cours de développement...</p></div>} />
                <Route path="profil" element={<div className="text-center py-20"><h2 className="text-2xl font-bold text-primary-900">Mon Profil</h2><p className="text-gray-600 mt-4">Page en cours de développement...</p></div>} />
              </Route>

              {/* Dashboard Routes (Bouclier/Forteresse Plans) */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardHome />} />
                <Route path="score" element={<ScoreDetails />} />
                {/* Placeholder routes for other dashboard pages */}
                <Route path="monitoring" element={<div className="text-center py-20"><h2 className="text-2xl font-bold text-primary-900">Veille IA Temps Réel</h2><p className="text-gray-600 mt-4">Page en cours de développement...</p></div>} />
                <Route path="reconversion" element={<div className="text-center py-20"><h2 className="text-2xl font-bold text-primary-900">Plan de Reconversion</h2><p className="text-gray-600 mt-4">Page en cours de développement...</p></div>} />
                <Route path="formations" element={<FormationsPage />} />
                <Route path="formations/:id" element={<FormationDetailPage />} />
                <Route path="bootcamps" element={<div className="text-center py-20"><h2 className="text-2xl font-bold text-primary-900">Bootcamps Express</h2><p className="text-gray-600 mt-4">Page en cours de développement...</p></div>} />
                <Route path="sector-analysis" element={<div className="text-center py-20"><h2 className="text-2xl font-bold text-primary-900">Analyses Sectorielles</h2><p className="text-gray-600 mt-4">Page en cours de développement...</p></div>} />
                <Route path="support" element={<div className="text-center py-20"><h2 className="text-2xl font-bold text-primary-900">Support Prioritaire</h2><p className="text-gray-600 mt-4">Page en cours de développement...</p></div>} />
                <Route path="settings" element={<div className="text-center py-20"><h2 className="text-2xl font-bold text-primary-900">Paramètres</h2><p className="text-gray-600 mt-4">Page en cours de développement...</p></div>} />
                <Route path="profile" element={<div className="text-center py-20"><h2 className="text-2xl font-bold text-primary-900">Mon Profil</h2><p className="text-gray-600 mt-4">Page en cours de développement...</p></div>} />
              </Route>
              
              {/* Redirect to landing page for any other route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            {/* Risk Calculator Modal */}
            <RiskCalculatorModal />

            {/* Notifications */}
            <NotificationContainer />

            {/* Toast Notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  duration: 3000,
                  iconTheme: {
                    primary: '#10B981',
                    secondary: '#fff',
                  },
                },
                error: {
                  duration: 5000,
                  iconTheme: {
                    primary: '#EF4444',
                    secondary: '#fff',
                  },
                },
              }}
            />

            {/* Cookie Banner */}
            <CookieBanner onConsentChange={() => {}} />
              </DashboardProvider>
            </AppProvider>
          </AuthProvider>
        </CookieProvider>
      </Router>
    </ClerkProvider>
  )
}

export default App