import React from 'react'
import ProjectPage from '../../components/project/ProjectPage.tsx'

export default function Projects() {
  return (
    <div className='w-full sm:w-auto md:w-185 min-h-screen flex flex-col items-center mx-auto px-10 pt-20 pb-15 relative z-10 animate-fade-in'>
      <div className="flex w-full py-10 flex-col">
        <div className="flex justify-between w-full items-center h-10 pb-10 border-b border-gray-600/70">
          <h1 className="font-bitcount text-3xl text-gray-100">All Projects</h1>
        </div>
        <div className="mt-10">
          <ProjectPage />
        </div>
      </div>
    </div>
  )
}
