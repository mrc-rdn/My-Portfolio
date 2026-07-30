
import { Outlet } from 'react-router-dom'
import { useState } from "react";


export default function PublicLayout() {
    const nav :string [] = ['Project', 'Experience', 'Stack', 'Certifications', 'About', 'Games']
    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
      <div className='lg:flex'>


          <div className='h-screen w-50 bg-neutral-800  border-r border-gray-500 hidden lg:flex flex-col'>
              

              <div className='px-8 py-5  mb-auto '>
                 <h2 className='text-white text-2xl font-bitcount mb-7'> {'Mrco'}</h2>
                  {
                      nav.map((items, index) => {
                          return (
                              <span key={index} className=' font-saira flex text-gray-400 my-5 text-[15px]
                                      transition duration-300 hover:text-white'>
                                  {items}
                              </span>
                          )
                      })
                  }
              </div>
              <div className='h-15 flex items-center border-t border-gray-500 py-3 px-5'>

              </div>

          </div>

          
          <div className={isOpen?('h-screen w-full bg-neutral-800  border-r border-gray-500  fixed lg:hidden'): ('h-screen w-full bg-neutral-800  border-r border-gray-500  fixed hidden')}>
              <div className='h-15 flex items-center border-b border-gray-500 py-3 px-10'>

                  <h2 className='text-white text-2xl font-bitcount '> {'</>Mrc'}</h2>
                  <button
                  className="lg:hidden text-white text-2xl font-bitcount ml-auto"
                  onClick={() => setIsOpen(!isOpen)}
              >
                  ⨉
              </button>
              </div>

              <div className='px-8 py-5  mb-auto '>
                  {
                      nav.map((items, index) => {
                          return (
                              <span key={index} className=' font-saira flex text-gray-400 my-5 text-[15px]
                                      transition duration-300 hover:text-white'>
                                  {items}
                              </span>
                          )
                      })
                  }
              </div>
              <div className='h-15 flex items-center  border-t border-gray-500 py-3 px-5 self-end'>

              </div>

          </div>

          <div className='h-15 w-full bg-neutral-800  border-b border-gray-500 px-10 flex justify-between items-center lg:hidden'>
              

              <h2 className='text-white text-2xl font-bitcount '> {'</>Mrc'}</h2>
              
              <button
                  className="lg:hidden text-white text-2xl font-bitcount "
                  onClick={() => setIsOpen(!isOpen)}
              >
                  ☰
              </button>

          </div>
          <main className='bg-neutral-800 h-screen w-full overflow-y-scroll'>
              <Outlet />
          </main>
      </div>
    
  )
}
