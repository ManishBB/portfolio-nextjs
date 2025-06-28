import { Metadata } from 'next'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Manish Bhamare - Software Engineer',
  description: 'Full-stack software engineer specializing in React, Next.js, Node.js, and modern web technologies.',
  keywords: ['software engineer', 'full-stack developer', 'react', 'next.js', 'node.js'],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
