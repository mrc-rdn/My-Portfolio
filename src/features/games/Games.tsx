import React from 'react'
import type { GameData } from '../../components/types/project'
import { Link } from 'react-router-dom'

export default function Games() {

    const GamesData : GameData[] = [
      {id: 1 , title: 'Drum Kit', img:'/images/games/Drums.png', link: 'https://drum-kit-gy2y.vercel.app/'},
      {id: 2 , title: 'Simon Game', img:'/images/games/Simon.png', link: 'https://simon-game-navy-psi.vercel.app/'}
    ]
  return (
    <div className=' w-full sm:w-auto md:w-185 h-screen flex flex-col items-center mx-auto px-10 '>
        <div className=' flex  items-center sm:items-start pt-30 pb-15 flex-col'>
          <div className="flex justify-between w-full items-start pb-8 border-b border-neutral-800/80">
          <div className="flex flex-col gap-2">
            <h1 className="font-bitcount text-4xl font-bold tracking-tight text-white">Games</h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mt-2">
              A collection of small games built to explore new ideas, sharpen my programming skills, and create fun, interactive experiences.
            </p>
          </div>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap pt-3">
            ← BACK HOME
          </Link>
        </div>
            {
              GamesData.map((items, index)=>{
                return (
                  <a
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={items.link}>
                    <div key={items.id} className='p-5 border-white border rounded-lg m-5 '>
                    <img src={items.img} alt="" />
                    <div className='flex justify-between items-center pt-5'>
                      <h1 className='font-bitcount  text-xl'>{items.title}</h1>
                      <p className='font-saira text-sm'>Open ↗</p>

                    </div>
                    
                  </div>

                  </a>
                  
                )
              })
            }
        </div>
    </div>
  )
}
