import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../../components/project/ProjectPage.tsx'

export function DetailProjectImage({ src, title }: { src: string; title: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="w-full h-64 sm:h-80 md:h-[450px] rounded-3xl bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950/20 flex flex-col items-center justify-center p-8 border border-neutral-700/50 shadow-inner">
        <span className="font-bitcount text-gray-500 text-5xl font-semibold mb-4">{'</>'}</span>
        <span className="font-saira text-gray-300 text-lg font-semibold text-center">{title}</span>
        <span className="font-saira text-neutral-400 text-sm mt-2">Visual Showcase Preview</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      className="rounded-3xl w-full h-auto max-h-[450px] object-cover border border-neutral-700/50 shadow-lg"
      onError={() => setHasError(true)}
    />
  );
}

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const projectIndex = parseInt(id || '', 10);
  const project = !isNaN(projectIndex) && projectIndex >= 0 && projectIndex < projects.length 
    ? projects[projectIndex] 
    : null;

  const [activeImage, setActiveImage] = useState<string | null>(
    project && project.img.length > 0 ? project.img[0] : null
  );

  if (!project) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center text-gray-400 font-saira">
        <h1 className="text-3xl font-bitcount text-white mb-4">Project Not Found</h1>
        <button 
          onClick={() => navigate('/projects')}
          className="px-6 py-2.5 bg-neutral-800 border border-neutral-600 rounded-xl text-gray-200 hover:border-white transition cursor-pointer"
        >
          ← Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="w-full sm:w-auto md:w-200 min-h-screen flex flex-col mx-auto px-6 sm:px-10 pt-20 pb-20 relative z-10 animate-fade-in font-saira">
      {/* Dynamic SEO tags */}
      <title>{`${project.title} - Portfolio Details`}</title>
      <meta name="description" content={project.description} />

      {/* Back Button */}
      <div className="mb-8">
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition duration-300 cursor-pointer text-sm font-semibold group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO PROJECTS
        </button>
      </div>

      {/* Header */}
      <div className="border-b border-gray-600/70 pb-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h1 className="text-3xl sm:text-4xl font-bitcount text-gray-100 font-bold">{project.title}</h1>
          <span className="text-sm bg-neutral-800 border border-neutral-700/60 text-gray-400 px-3 py-1 rounded-full w-fit">
            {project.duration}
          </span>
        </div>
      </div>

      {/* Hero Showcase */}
      <div className="w-full mb-10">
        <DetailProjectImage src={activeImage || ''} title={project.title} />
        
        {/* Gallery Thumbnails */}
        {project.img.length > 1 && (
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2 shrink-0">
            {project.img.map((imagePath, index) => {
              const [thumbnailError, setThumbnailError] = useState(false);
              return (
                <button
                  key={index}
                  onClick={() => setActiveImage(imagePath)}
                  className={`w-20 sm:w-24 h-14 sm:h-16 rounded-lg border-2 overflow-hidden cursor-pointer shrink-0 transition ${
                    activeImage === imagePath ? 'border-white' : 'border-neutral-700/60 opacity-60 hover:opacity-100'
                  }`}
                >
                  {thumbnailError ? (
                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-xs font-semibold text-gray-500">
                      Img {index + 1}
                    </div>
                  ) : (
                    <img 
                      src={imagePath} 
                      alt={`${project.title} gallery thumbnail ${index + 1}`} 
                      className="w-full h-full object-cover"
                      onError={() => setThumbnailError(true)}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Quick Details Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2 flex flex-col gap-8">
          {/* Description */}
          <div>
            <h2 className="text-lg font-bitcount text-gray-200 border-b border-neutral-700/50 pb-2 mb-3">Project Description</h2>
            <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed">{project.description}</p>
          </div>

          {/* Challenges & Solutions */}
          {(project.challenges || project.solutions) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.challenges && (
                <div className="p-5 rounded-2xl bg-red-950/10 border border-red-900/30">
                  <h3 className="text-red-400 text-sm font-bitcount font-semibold mb-2">💡 CHALLENGE ENCOUNTERED</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.challenges}</p>
                </div>
              )}
              {project.solutions && (
                <div className="p-5 rounded-2xl bg-neutral-800/40 border border-neutral-700/60">
                  <h3 className="text-white text-sm font-bitcount font-semibold mb-2">⚡ SOLUTION IMPLEMENTED</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.solutions}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar Info Panel */}
        <div className="flex flex-col gap-6 p-6 rounded-2xl bg-neutral-800/40 border border-neutral-700/40 h-fit">
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Status</h3>
            {project.is_status ? (
              <span className="px-2.5 py-1 bg-neutral-800 border border-neutral-700/60 text-gray-200 rounded text-xs font-semibold">
                Completed
              </span>
            ) : (
              <span className="px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded text-xs font-semibold">
                In Progress
              </span>
            )}
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 bg-neutral-700/50 text-gray-300 border border-neutral-600/30 text-[11px] rounded transition duration-200 hover:border-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col gap-3 pt-4 border-t border-neutral-700/50">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-2 bg-white hover:bg-neutral-200 text-black rounded-xl transition duration-300 font-semibold text-sm cursor-pointer"
              >
                {"Live Demo ↗\uFE0E"}
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-gray-200 border border-neutral-600/60 rounded-xl transition duration-300 font-semibold text-sm cursor-pointer"
              >
                {"GitHub Code ↗\uFE0E"}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Key Features Block */}
      {project.features && project.features.length > 0 && (
        <div className="w-full">
          <h2 className="text-lg font-bitcount text-gray-200 border-b border-neutral-700/50 pb-2 mb-4">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl border border-neutral-700/40 bg-neutral-800/10 hover:border-neutral-600/50 transition duration-300 flex items-start gap-3"
              >
                <span className="text-white font-semibold text-lg leading-none mt-0.5">•</span>
                <p className="text-gray-400 text-sm leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
