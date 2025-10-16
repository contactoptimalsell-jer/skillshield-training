import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface Section {
  id: string
  title: string
  subsections?: Section[]
}

interface TableOfContentsProps {
  sections: Section[]
  className?: string
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ sections, className = '' }) => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const toggleExpanded = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const renderSection = (section: Section, level: number = 0) => {
    const isExpanded = expandedSections.has(section.id)
    const isActive = activeSection === section.id
    const hasSubsections = section.subsections && section.subsections.length > 0

    return (
      <div key={section.id} className={`${level > 0 ? 'ml-4' : ''}`}>
        <motion.button
          whileHover={{ x: 4 }}
          onClick={() => {
            if (hasSubsections) {
              toggleExpanded(section.id)
            }
            scrollToSection(section.id)
          }}
          className={`w-full text-left p-2 rounded-lg transition-colors text-sm ${
            isActive 
              ? 'bg-cyan-100 text-cyan-700 font-medium' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-2">
            {hasSubsections && (
              <div className="flex-shrink-0">
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
            )}
            <span className="truncate">{section.title}</span>
          </div>
        </motion.button>

        {hasSubsections && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {section.subsections!.map(subsection => renderSection(subsection, level + 1))}
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`bg-white rounded-lg border border-gray-200 p-6 sticky top-8 ${className}`}
    >
      <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
        Table des matières
      </h3>
      <nav className="space-y-1">
        {sections.map(section => renderSection(section))}
      </nav>
    </motion.div>
  )
}

