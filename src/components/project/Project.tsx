import React,{useState} from 'react'
import ProjectModal from './ProjectModal'
import type { ProjectData } from "../types/project";

interface ProjectProps {
  project: ProjectData;
}


export default function Project({project}: ProjectProps) {
  const [isModal, setIsModal] = useState(false)
  console.log(isModal)
  const handleExit = ()=>{
    setIsModal(false)
  }
  return ( 
    <div className=''>
      
      
      <div className='flex m-3 xl:m-0 xl:mt-10  md:gap-10 '
      onClick={()=>{setIsModal(true)}}>
        <div className='p-6 w-full md:w-170 md:h-145 border border-gray-400 rounded-3xl transition-transform duration-300 hover:scale-105 hover:border-gray-100  backdrop-blur-md'>
          <h1 className='font-bitcount text-gray-200 text-lg md:text-xl font-semibold'>{project.title}</h1>
          <div className='w-full py-5'>
            <img src={project.img[0]} alt="" className='rounded-2xl' />
          </div>
          <div className='flex flex-wrap gap-5 mb-4 px-5 text-gray-400'>
            {project.technologies.slice(0,3).map((tech)=>{
              return <span className='font-saira text-xs md:text-base '>{tech}</span>
            })}
            {project.technologies.length > 3 &&(
              <span className='font-saira text-xs md:text-base'>
                + {project.technologies.length - 3} more
              </span>
            )}
          </div>
          <div className='px-5'>
            <p className='text-gray-400 text-sm md:text-base'>{project.description}</p>
          </div>
          <button className='text-white px-4 py-4'>
            Click to View Details <span className='text-lime-700'>→</span>
          </button>
          
        </div>
        

      </div>
      
    
      {isModal?<ProjectModal project={project} handleExit={handleExit} />:null}      
      
    </div>
  )
}
