
import { Outlet } from 'react-router-dom'

export default function PublicLayout() {
    const nav :string [] = ['Project', 'Experience', 'Stack', 'Certifications', 'About']

  return (
      <div className='flex'>
          <div className='h-screen w-50 bg-neutral-800  border-r border-gray-500'>
              <div className='h-15 flex items-center border-b border-gray-500 py-3 px-5'>
                  
                  <h2 className='text-white text-2xl font-bitcount '> {'</>Mrc'}</h2>
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
        <main className='bg-neutral-800 h-screen w-full'>
            <Outlet />
        </main>
      </div>
    
  )
}
