import React,{useEffect, useState}  from 'react'
import type { ProjectData } from "../types/project";
interface ProjectModalProps {
  project: ProjectData;
  handleExit: () => void;
}

export default function ProjectModal({project, handleExit}: ProjectModalProps) {
    const [img, setImg] = useState<number>(0);
    const [fade, setFade] = useState<boolean>(true)

    useEffect(() => {
        const interval = setInterval(()=>{
            setFade(false)
            setTimeout(()=>{
                setImg(prev =>{
                    if(prev >= project.img.length -1){
                        return 0;
                    }
                    return prev + 1;
                })
                setFade(true)
            },300)
            
        }, 3000)
        
    }, [project.img.length]);

    

    

    

  return (
   <div className='w-full h-full fixed bg-white/10 backdrop-blur-md inset-0 z-1000 grid place-items-center'>
  <div className='w-11/12 md:w-9/12 h-11/12 md:h-10/12 bg-black rounded-tl-3xl rounded-bl-3xl p-5 md:p-10 overflow-y-scroll'>
    <header className='border-b-1 border-gray-300 flex items-center p-2'>
      <p className='text-2xl sm:text-3xl font-semibold'>{project.title}</p>
      <button
        className='text-gray-100 ml-auto mb-3'
        onClick={() => handleExit()}
      >
        ⨉
      </button>
    </header>

    <section className='mt-5 flex flex-col md:flex-row'>
      <div className='w-full md:w-7/12 p-2'>
        <img
          src={project.img[img]}
          alt=""
          className={`rounded-xl transition-opacity duration-700 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
        />
        
        <div>
          <h1 className='text-lg md:text-xl font-semibold mt-3'>Description</h1>
          <div className='p-2'>
            <p className='text-gray-400 text-sm md:text-base'>{project.description}</p>
          </div>
        </div>
        {project.technologies === null? null :<div className='flex flex-col'>
          <h1 className='text-lg md:text-xl font-semibold mt-3 mb-2'>Technologies</h1>
          <div className='flex flex-wrap'>
             {project.technologies.map((tech) => {
               return (
                 <span className='px-3 md:px-5 py-1 md:py-2 border border-neutral-700 text-xs rounded-full bg-neutral-800/40 text-gray-200 m-1 transition duration-500 hover:scale-105 hover:border-neutral-500'>
                   {tech}
                 </span>
               );
             })}
          </div>
        </div>}
        <div>
        
             {project.link && 
             <button className='border my-2 py-2 w-20 mt-10 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold transition duration-500 hover:scale-105 text-sm cursor-pointer'
                 onClick={() => window.open(project.link, "_blank")}
             >
                 Visit →
             </button>}
        </div>
        
      </div>

      <div className='w-full md:w-5/12 p-2 mt-5 md:mt-0'>
      
        <div className='w-full flex flex-col md:flex-row mb-3 gap-3'>
            
          <div className='border w-full md:w-6/12 p-4 rounded-xl bg-white/10 backdrop-blur transistion duration-500 hover:scale-105'>
            <label className='text-gray-400 text-sm'>Status</label>
             {project.is_status ? (
               <p className='mt-3 text-xl font-semibold text-white'>Completed</p>
             ) : (
              <p className='mt-3 text-xl font-semibold text-yellow-500'>In Progress</p>
            )}
          </div>
          <div className='border w-full md:w-6/12 p-4 rounded-xl bg-white/10 backdrop-blur transistion duration-500 hover:scale-105'>
            <label className='text-gray-400 text-sm'>Duration</label>
            <p className='mt-3 text-xl font-semibold'>{project.duration}</p>
          </div>
        </div>
        {project.features === null?null: <div>
          <h1 className='text-lg md:text-xl font-semibold'>Key Features</h1>
          <ul>
             {project.features.map((feature) => {
               return (
                 <li className='text-gray-400 text-sm md:text-base m-1 flex items-center gap-2'>
                   <span className='text-white text-lg leading-none'>•</span> {feature}
                 </li>
               );
             })}
          </ul>
        </div>}
      </div>
    </section>
  </div>
</div>
  )
}