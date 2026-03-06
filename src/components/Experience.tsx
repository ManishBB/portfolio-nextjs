'use client'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Building2, Calendar, MapPin } from 'lucide-react'
const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'TexAu — Building at Visalaw (gen.visalaw.ai)',
      location: 'Pune, IN',
      period: 'July 2025 – Present',
      description: [
        'Architected and implemented a scalable microservices-based system using NestJS, FastAPI, Celery, Supabase, and AWS for AI-driven legal document automation',
        'Built context-aware AI pipelines using LangChain and Pinecone vector database, enabling intelligent chat, document summarization, translation, and private GPT systems',
        'Reduced document processing latency by 35–40% through optimized background job orchestration (Celery), Redis caching, and API refactoring',
        'Designed and delivered end-to-end public APIs, expanding external integrations and increasing product accessibility',
        'Revamped the platform UI (Next.js v1 →v2), improving frontend performance by 25% via SSR, dynamic imports, memoization, and optimized state management (Zustand + Context)',
        'Integrated Stripe payment systems and implemented RBAC for secure multi-tenant workspace management',
        'Managed AWS infrastructure using Terraform, Docker, and CI/CD pipelines; improved observability using Sentry for production stability',
        'Contributed to technical foundation during 1.6M fundraising phase supporting product launch'
      ],
      technologies: ['NestJS', 'FastAPI', 'Celery', 'Supabase', 'AWS', 'LangChain', 'Pinecone', 'Redis', 'Next.js', 'Zustand', 'Stripe', 'Terraform', 'Docker', 'Sentry']
    },
    {
      title: 'Software Engineer',
      company: 'ZYKRR Technologies Pvt. Ltd.',
      location: 'Gurugram, IN',
      period: 'June 2024 – June 2025',
      description: [
        'Spearheaded development of a Customer Experience (CX) management platform leveraging NPS and CSAT frameworks to deliver real-time analytics and actionable insights',
        'Improved production system performance by up to 70% through architectural optimizations, query tuning, and backend refactoring',
        'Designed PostgreSQL materialized view strategy for large-scale datasets, reducing query execution time by 40–50% and enabling faster reporting',
        'Led proof-of-concept development for Call Analytics, delivering 100% functional requirements in collaboration with cross-functional stakeholders',
        'Executed cloud migration initiatives on AWS, ensuring secure, scalable infrastructure and resolving critical security vulnerabilities',
        'Automated and optimized CI/CD pipelines, accelerating deployment cycles and reducing manual operational overhead',
        'Delivered enterprise-grade integrations with Salesforce, SFTP systems, and custom rule engines to enable seamless client interoperability',
        'Contributed to US market product revamp, improving scalability by 30% through database and API optimizations'
      ],
      technologies: ['PostgreSQL', 'AWS', 'CI/CD', 'Salesforce', 'NPS', 'CSAT']
    },
    {
      title: 'Full Stack Developer',
      company: 'FlexiLancer',
      location: 'Pune, IN',
      period: 'Oct 2023 – May 2025',
      description: [
        'Contributed to the development and optimization of a scalable e-commerce platform, improving transaction processing speed by 35% through backend query tuning and API enhancements',
        'Built a CRM module with real-time order tracking, reducing data retrieval latency by 30% and improving operational efficiency',
        'Optimized frontend rendering and API integration flows, increasing user engagement by 20% through faster and more responsive interfaces',
        'Assisted in automating CI/CD pipelines and deployment workflows, reducing release cycles by 45% while maintaining 99.9% uptime for production systems',
        'Collaborated with cross-functional teams in an agile environment to deliver customer-focused features and iterative product improvements',
        'Built full-stack event booking platform for movies, concerts, and events with real-time seat availability',
        'Developed intuitive user interface with advanced search, filtering, and seat selection features',
        'Integrated Stripe payment gateway for secure transactions and Kafka for managing high-traffic bookings',
        'Implemented WebSockets for real-time updates and AWS for cloud infrastructure deployment'
      ],
      technologies: ['Stripe', 'Kafka', 'WebSockets', 'AWS', 'CI/CD']
    }
  ]
  return (
    <section id="experience" className="py-12 sm:py-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.2,
          x: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-full h-20 sm:h-40 bg-blue-100 dark:bg-blue-900/20 blur-2xl opacity-40 z-0"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.15,
          scale: [1, 1.05, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 z-0"
      />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            My professional journey in software development, working on diverse projects
            and technologies to deliver impactful solutions.
          </p>
        </motion.div>
        <div className="space-y-6 sm:space-y-8">
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
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
                    <div>
                      <CardTitle className="text-lg sm:text-xl text-slate-800 dark:text-white flex items-center gap-2">
                        <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2">
                        <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                 
                  <Separator />
                 
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
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
