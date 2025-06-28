'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'ZYKRR Technologies Pvt. Ltd.',
      location: 'Gurugram, IN',
      period: 'June 2024 – Present',
      description: [
        'Optimized legacy React (Class-based), Node.js, and GraphQL codebase, improving code consistency, fixing discrepancies, and enhancing query performance—reducing execution time from 4-5s to 2-3s.',
        'Improved audit log table pagination by implementing a data archival job that retains only the last 30 days in the main table, significantly speeding up execution.',
        'Led the development of Call Analytics POC from scratch, integrating AWS services, collaborating with the Python data science team, and delivering a fully functional concept.',
        'Contributed to the complete product revamp for the US market using Next.js, NestJS, PostgreSQL, AWS, Redis, Kafka, and more—developing a large-scale application in an agile, sprint-based approach.'
      ],
      technologies: ['React', 'Node.js', 'GraphQL', 'Next.js', 'NestJS', 'PostgreSQL', 'AWS', 'Redis', 'Kafka']
    },
    {
      title: 'Full Stack Developer',
      company: 'FlexiLancer',
      location: 'Pune, IN',
      period: 'Jan 2023 – May 2024',
      description: [
        'Developed MERN stack projects with custom UI components (ShadCN, Ant Design, MUI).',
        'Translated client needs into scalable, production-ready solutions.',
        'Built end-to-end applications, integrating APIs, auth, and real-time features.'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'ShadCN', 'Ant Design', 'MUI']
    }
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        className="absolute top-0 left-0 w-full h-40 bg-blue-100 dark:bg-blue-900/20 blur-2xl opacity-40 z-0"
        animate={{
          x: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 z-0"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            My professional journey in software development, working on diverse projects 
            and technologies to deliver impactful solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card modern-card"
            >
              <Card className="bg-transparent shadow-none border-0">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-800 dark:text-white flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2">
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 