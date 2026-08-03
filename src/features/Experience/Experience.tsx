import React from 'react'
import { Link } from 'react-router-dom'

interface ExperienceItem {
  role: string;
  company: string;
  companyLink?: string;
  timeline: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Software Development Intern',
      company: 'NexVision Inc.',
      timeline: '2026 - Present',
      responsibilities: [
        'Collaborate with senior developers to design, develop, and deploy scalable enterprise features.',
        'Optimize page performance, code split packages, and memoize expensive computations.',
        'Integrate secure real-time notification streams and database listeners.'
      ],
      achievements: [
        'Boosted core technician dashboard speed and overall load performance by 35% through query caching and lazy-loading.',
        'Designed a reliable state synchronizer that resolves data conflicts during spotty cellular coverage on-site.'
      ],
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase']
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      timeline: '2024 - 2025',
      responsibilities: [
        'Translated complex client concepts into high-performance web systems and customizable dashboards.',
        'Structured search-engine optimized (SEO) and accessible layouts adhering to modern web design standards.',
        'Designed database systems to securely store customer details, logs, and inquiry entries.'
      ],
      achievements: [
        'Delivered 5+ web platforms with clean client satisfaction rates, optimizing layout efficiency and speed.',

      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Express.js', 'PostgreSQL', 'Git']
    }
  ];

  return (
    <div className='w-full sm:w-auto md:w-185 min-h-screen flex flex-col items-center mx-auto px-10 pt-20 pb-20 relative z-10 animate-fade-in font-saira'>
      {/* Dynamic SEO tags */}
      <title>Work Experience - Portfolio</title>
      <meta name="description" content="Detailed history of professional software development internship, projects, responsibilities, and technical achievements." />

      <div className="flex w-full py-10 flex-col">
        {/* Header */}
        <div className="flex justify-between w-full items-center h-10 pb-10 border-b border-gray-600/70">
          <h1 className="font-bitcount text-3xl text-gray-100">Experience History</h1>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 text-sm font-semibold">
            ← BACK HOME
          </Link>
        </div>

        {/* Timeline Container */}
        <div className="mt-12 relative border-l border-gray-600/50 pl-6 sm:pl-8 ml-2 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px]  w-4 h-4 rounded-full bg-neutral-900 border-2 border-white group-hover:bg-white transition duration-300 shadow-md shadow-white/10" />

              {/* Title Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-100 group-hover:text-white transition duration-300">
                    {exp.role}
                  </h2>
                  <p className="text-sm text-gray-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs sm:text-sm text-gray-400 font-semibold bg-neutral-800/80 border border-neutral-700/50 px-2.5 py-0.5 rounded-full w-fit">
                  {exp.timeline}
                </span>
              </div>

              {/* Responsibilities Block */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Responsibilities</h3>
                <ul className="list-none flex flex-col gap-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-white mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements Block */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Major Achievements</h3>
                <ul className="list-none flex flex-col gap-2">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2 bg-neutral-800/20 border border-neutral-700/50 p-3 rounded-xl">
                      <span className="text-white mt-0.5">✔</span>
                      <span className="text-gray-300">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges Block */}
              <div className="pt-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 bg-neutral-700/50 text-gray-300 border border-neutral-600/30 text-[11px] rounded transition duration-200 hover:border-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
