import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ProjectData } from "../types/project";

interface ProjectProps {
  project: ProjectData;
  index: number;
}

export function ProjectImage({ src, title }: { src: string; title: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="w-full h-40 sm:h-48 md:h-56 rounded-2xl bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900/40 flex flex-col items-center justify-center p-6 border border-neutral-700/50 shadow-inner">
        <span className="font-bitcount text-gray-500 text-3xl font-semibold mb-2">{'</>'}</span>
        <span className="font-saira text-gray-300 text-sm font-semibold text-center">{title}</span>
        <span className="font-saira text-neutral-400 text-xs mt-1">Image Preview</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      className="rounded-2xl w-full h-40 sm:h-48 md:h-56 object-cover border border-neutral-700/50 shadow-md"
      onError={() => setHasError(true)}
    />
  );
}

export default function Project({project, index}: ProjectProps) {
  const navigate = useNavigate();

  return ( 
    <div className='w-full mb-10'>
      <div 
        className='flex flex-col cursor-pointer'
        onClick={() => navigate(`/projects/${index}`)}
      >
        <div className='p-6 w-full h-full border border-gray-400 rounded-3xl transition-transform duration-300 hover:scale-102 hover:border-white bg-neutral-800/40 backdrop-blur-md flex flex-col justify-between min-h-[420px]'>
          <div>
            <h1 className='font-bitcount text-gray-200 text-lg md:text-xl font-semibold mb-3'>{project.title}</h1>
            <div className='w-full mb-4'>
              <ProjectImage src={project.img[0]} title={project.title} />
            </div>
            <div className='flex flex-wrap gap-x-4 gap-y-2 mb-4 text-gray-400'>
              {project.technologies.slice(0,3).map((tech, idx)=>{
                return <span key={idx} className='font-saira text-xs md:text-sm bg-neutral-700/50 px-2.5 py-0.5 rounded'>{tech}</span>
              })}
              {project.technologies.length > 3 &&(
                <span className='font-saira text-xs md:text-sm bg-neutral-700/50 px-2.5 py-0.5 rounded'>
                  + {project.technologies.length - 3} more
                </span>
              )}
            </div>
            <div>
              <p className='text-gray-400 text-sm md:text-base font-saira line-clamp-3'>{project.description}</p>
            </div>
          </div>
          <button className='text-white mt-4 font-saira flex items-center gap-1 hover:text-white transition duration-300 text-sm md:text-base cursor-pointer'>
            Click to View Details <span className='text-white'>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
