'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Bird } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mbb7224@gmail.com',
      href: 'mailto:mbb7224@gmail.com',
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7218396581',
      href: 'tel:+917218396581',
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      href: '#',
      color: 'bg-red-500',
      textColor: 'text-red-600'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'manishbb.vercel.app',
      href: 'https://manishbb.vercel.app',
      color: 'bg-purple-500',
      textColor: 'text-purple-600'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect and collaborate',
      href: 'https://linkedin.com/in/manishbhamare7224',
      color: 'bg-blue-600',
      textColor: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my projects',
      href: 'https://github.com/ManishBB',
      color: 'bg-gray-800',
      textColor: 'text-gray-800 dark:text-white'
    },
    {
      icon: Bird,
      label: 'Twitter',
      value: 'Follow me',
      href: 'https://x.com/MrFictionCoder',
      color: 'bg-gray-800',
      textColor: 'text-gray-800 dark:text-white'
    }
    ]

  return (
    <section id="contact" className="py-12 sm:py-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.2,
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-10%] top-1/2 w-[175px] sm:w-[350px] h-[175px] sm:h-[350px] bg-gradient-to-br from-blue-200 via-green-200 to-purple-200 rounded-full blur-3xl opacity-40 z-0"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.15,
          scale: [1, 1.08, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-10%] bottom-0 w-[125px] sm:w-[250px] h-[125px] sm:h-[250px] bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 rounded-full blur-2xl opacity-30 z-0"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${info.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}
                  >
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm sm:text-base">
                    {info.label}
                  </h3>
                  <a
                    href={info.href}
                    className={`text-xs sm:text-sm ${info.textColor} hover:opacity-80 transition-opacity`}
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${social.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}
                  >
                    <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm sm:text-base">
                    {social.label}
                  </h3>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs sm:text-sm ${social.textColor} hover:opacity-80 transition-opacity`}
                  >
                    {social.value}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 