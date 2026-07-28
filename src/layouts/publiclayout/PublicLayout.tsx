import React from 'react'
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { Slash } from 'lucide-react';
export default function PublicLayout() {
    const nav :string [] = ['Project', 'Experience', 'Certifications', 'About']

  return (
    <div className='h-screen w-50 bg-neutral-900 p-5'>
        <div className='w-full flex items-center'>
            <h1 className='text-white flex text-xl items-center'><ChevronLeft />/<ChevronRight /></h1>
            <h2 className='text-white text-xl font-mono'>Mrc</h2>
        </div>
       
      <div>
        {
            nav.map((items, index)=>{
                return(
                    <span className='flex text-white'>{items}</span>
                )
            })
        }
      </div>
    </div>
  )
}
