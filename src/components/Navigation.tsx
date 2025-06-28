'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      // Active section highlight
      const sections = ['home', 'about', 'experience', 'projects', 'contact']
      for (let sec of sections) {
        const el = document.getElementById(sec)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom > 120) {
            setActive(sec.charAt(0).toUpperCase() + sec.slice(1))
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      if (navRef.current) {
        navRef.current.style.setProperty('--scroll-progress', `${progress * 100}%`)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95vw] max-w-3xl rounded-2xl shadow-xl transition-all duration-300 ${
        scrolled
          ? 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg border border-slate-200/60 dark:border-slate-800/60'
          : 'bg-white/30 dark:bg-slate-900/30 backdrop-blur-md border border-transparent'
      }`}
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-t-2xl" style={{ width: 'var(--scroll-progress, 0%)', transition: 'width 0.2s' }} />
      <div className="flex items-center justify-between h-16 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold text-slate-800 dark:text-white tracking-tight"
        >
          Manish Bhamare
        </motion.div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 relative">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              onClick={() => scrollToSection(item.href)}
              className={`relative px-2 py-1 text-base font-medium transition-colors duration-200 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 ${
                active === item.name ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              {item.name}
              {/* Animated underline */}
              {active === item.name && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                  style={{ zIndex: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 dark:text-slate-300"
            aria-label="Open menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white/80 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-700 overflow-hidden rounded-b-2xl"
        style={{ transition: 'height 0.3s, opacity 0.3s' }}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left text-lg font-medium py-2 rounded transition-colors duration-200 ${
                active === item.name ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : 'text-slate-700 dark:text-slate-200'
              }`}
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(59,130,246,0.08)' }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navigation 