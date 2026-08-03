import React from 'react'
import { Link } from 'react-router-dom'

interface TechCategory {
  category: string;
  items: string[];
}

export default function Stack() {
  const stackCategories: TechCategory[] = [
    {
      category: 'FRONTEND',
      items: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'Vite',
        'ESLint',
        'Prettier'
      ]
    },
    {
      category: 'BACKEND',
      items: [
        'Node.js',
        'Express.js',
        'WebSockets',
        'REST APIs'
      ]
    },
    {
      category: 'DATABASES & BAAS',
      items: [
        'PostgreSQL',
        'Supabase'
      ]
    },
    {
      category: 'DEVOPS & CLOUD',
      items: [
        'AWS',
        'Nginx',
        'PM2',
        'Git',
        'GitHub'
      ]
    },
    {
      category: 'AI & OTHER TOOLS',
      items: [
        'Gemini API',
        'Postman'
      ]
    }
  ];

  return (
    <div className='w-full sm:w-auto md:w-185 min-h-screen flex flex-col items-center mx-auto px-10 pt-20 pb-20 relative z-10 animate-fade-in font-saira'>
      {/* Dynamic SEO tags */}
      <title>Tech Stack - Portfolio</title>
      <meta name="description" content="Technical expertise overview including Frontend, Backend, Databases, Cloud & DevOps, and developer tools." />

      <div className="flex w-full py-10 flex-col">
        {/* Header */}
        <div className="flex justify-between w-full items-start pb-8 border-b border-neutral-800/80">
          <div className="flex flex-col gap-2">
            <h1 className="font-bitcount text-4xl font-bold tracking-tight text-white">Tech stack</h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mt-2">
              The Games, frameworks, and platforms I reach for — across the front end, back end, infrastructure, and AI.
            </p>
          </div>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap pt-3">
            ← BACK HOME
          </Link>
        </div>

        {/* Categories Stack */}
        <div className="mt-12 flex flex-col gap-10 w-full">
          {stackCategories.map((cat, idx) => (
            <div key={idx} className="w-full">
              <h2 className="text-xs font-semibold text-neutral-500 tracking-wider mb-4 uppercase font-saira">
                {cat.category}
              </h2>
              
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((tech, techIdx) => (
                  <div 
                    key={techIdx} 
                    className="font-mono text-sm px-4 py-2 rounded-xl border border-neutral-800/80 bg-neutral-900/40 text-gray-200 hover:border-neutral-500/50 transition duration-200 cursor-default select-none"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

