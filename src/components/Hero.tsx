'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowDown, Download, Mail, Linkedin, Github } from 'lucide-react'
import { useEffect, useState } from 'react'

const heroSubtitles = [
  'Full-stack software engineer passionate about building scalable web applications',
  'React, Next.js, Node.js, and modern web technologies',
  'Let\'s build something amazing together!'
]

const floatingIcons = [
  { icon: <Linkedin className="h-6 w-6 text-blue-500" />, style: 'top-10 left-10' },
  { icon: <Github className="h-6 w-6 text-gray-800 dark:text-white" />, style: 'top-20 right-16' },
  { icon: <Download className="h-6 w-6 text-green-500" />, style: 'bottom-16 left-20' },
  { icon: <Mail className="h-6 w-6 text-pink-500" />, style: 'bottom-10 right-10' },
]

const Hero = () => {
  const [subtitleIdx, setSubtitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Typewriter effect for subtitle
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (typing) {
      if (displayed.length < heroSubtitles[subtitleIdx].length) {
        timeout = setTimeout(() => {
          setDisplayed(heroSubtitles[subtitleIdx].slice(0, displayed.length + 1))
        }, 50)
      } else {
        setTyping(false)
        timeout = setTimeout(() => setTyping(true), 1200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(heroSubtitles[subtitleIdx].slice(0, displayed.length - 1))
        }, 30)
      } else {
        setTyping(true)
        setSubtitleIdx((subtitleIdx + 1) % heroSubtitles.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, subtitleIdx])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          className="absolute top-[-10%] left-1/2 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-1/3 w-[400px] h-[400px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-2xl opacity-40"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      {/* Floating Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute z-20 ${item.style}`}
          initial={{ y: 0, opacity: 0.7 }}
          animate={{ y: [0, -12, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        >
          {item.icon}
        </motion.div>
      ))}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Badge variant="secondary" className="mb-4 text-sm shadow-md bg-blue-500 text-white border-0">
            Software Engineer
          </Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6 drop-shadow-lg"
        >
          Manish Bhamare
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto min-h-[48px]"
        >
          <span className="font-mono text-blue-700 dark:text-blue-300">
            {displayed}
            <span className="inline-block w-2 h-6 align-middle bg-blue-400 animate-pulse ml-1 rounded-sm" />
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-0"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-2 border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 shadow-md hover:scale-105 transition-transform duration-200"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open('https://linkedin.com/in/manishbhamare7224', '_blank')}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 shadow-md hover:scale-110 transition-transform"
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open('https://github.com/ManishBB', '_blank')}
            className="text-gray-900 hover:text-black dark:text-white dark:hover:text-gray-300 shadow-md hover:scale-110 transition-transform"
          >
            <Github className="h-6 w-6" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400 dark:text-slate-500"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 