import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Shield, Menu, X } from 'lucide-react'
import { useAuth, UserButton } from '@clerk/clerk-react'
import { HeroButton } from './ui/HeroButton'

export const PremiumNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isSignedIn, isLoaded } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Blog', href: '#blog' }
  ]

  const handleDashboardClick = () => {
    navigate('/dashboard')
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <Shield className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <span className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                SkillShield
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoaded && (
              <>
                {isSignedIn ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <div className="text-white">
                      <UserButton 
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            avatarBox: 'w-10 h-10',
                            userButtonPopoverCard: 'bg-slate-800 border border-white/20',
                            userButtonPopoverActions: 'bg-slate-800',
                            userButtonPopoverActionButton: 'text-white hover:bg-slate-700',
                            userButtonPopoverActionButtonText: 'text-white',
                            userButtonPopoverFooter: 'hidden'
                          }
                        }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to="/auth?mode=signin"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      Se connecter
                    </Link>
                    <HeroButton 
                      onClick={() => navigate('/auth?mode=signup')}
                      variant="primary" 
                      size="sm"
                      animated={false}
                    >
                      Rejoindre
                    </HeroButton>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="px-4 pt-4 border-t border-white/10 space-y-3">
              {isLoaded && (
                <>
                  {isSignedIn ? (
                    <>
                      <button
                        onClick={handleDashboardClick}
                        className="block w-full text-center py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        Dashboard
                      </button>
                      <div className="flex items-center justify-center py-2">
                        <UserButton 
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              avatarBox: 'w-10 h-10',
                              userButtonPopoverCard: 'bg-slate-800 border border-white/20',
                              userButtonPopoverActions: 'bg-slate-800',
                              userButtonPopoverActionButton: 'text-white hover:bg-slate-700',
                              userButtonPopoverActionButtonText: 'text-white'
                            }
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/auth?mode=signin"
                        className="block w-full text-center py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Se connecter
                      </Link>
                      <HeroButton 
                        onClick={() => {
                          navigate('/auth?mode=signup')
                          setIsMobileMenuOpen(false)
                        }}
                        variant="primary" 
                        size="md"
                        animated={false}
                        className="w-full"
                      >
                        Rejoindre
                      </HeroButton>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
