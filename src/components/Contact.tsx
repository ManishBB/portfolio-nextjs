'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Bird, Send, Sparkles } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mbb7224@gmail.com',
      href: 'mailto:mbb7224@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      hoverGradient: 'group-hover:from-blue-600 group-hover:to-cyan-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 72183 96581',
      href: 'tel:+917218396581',
      gradient: 'from-green-500 to-emerald-500',
      hoverGradient: 'group-hover:from-green-600 group-hover:to-emerald-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      href: '#',
      gradient: 'from-red-500 to-pink-500',
      hoverGradient: 'group-hover:from-red-600 group-hover:to-pink-600'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'manishbb.vercel.app',
      href: 'https://manishbb.vercel.app',
      gradient: 'from-purple-500 to-indigo-500',
      hoverGradient: 'group-hover:from-purple-600 group-hover:to-indigo-600'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/manishbhamare7224',
      gradient: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/ManishBB',
      gradient: 'from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800',
      bgColor: 'bg-gray-50 dark:bg-gray-950/30'
    },
    {
      icon: Bird,
      label: 'X (Twitter)',
      value: 'Follow updates',
      href: 'https://x.com/MrFictionCoder',
      gradient: 'from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800',
      bgColor: 'bg-slate-50 dark:bg-slate-950/30'
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.15,
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-15%] top-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 z-0"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.15,
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-15%] bottom-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-br from-green-400 via-cyan-400 to-blue-400 rounded-full blur-3xl opacity-25 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Sparkle Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full mb-6 shadow-lg"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Let&apos;s Connect</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4 leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;m always excited to discuss new opportunities
            and innovative ideas. Let&apos;s build something amazing together!
          </p>
        </motion.div>

        {/* Contact Info Cards - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon with Gradient */}
              <div className="relative mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} ${info.hoverGradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <info.icon className="h-7 w-7 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-slate-800 dark:text-white mb-2 text-base">
                {info.label}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-1">
                {info.value}
              </p>

              {/* Animated Corner Accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${info.gradient} opacity-10 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300`} />
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links - Modern Card Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card modern-card"
        >
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl border-0">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                  Connect on Social Media
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className={`group relative overflow-hidden rounded-xl ${social.bgColor} p-5 border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300`}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}
                      >
                        <social.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                          {social.label}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {social.value}
                        </p>
                      </div>
                      <Send className="h-5 w-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => window.location.href = 'mailto:mbb7224@gmail.com'}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-base rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Send me an email
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 