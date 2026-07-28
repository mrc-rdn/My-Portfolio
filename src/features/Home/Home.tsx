import { GitHubCalendar } from "react-github-calendar";

export default function Home() {
    const dots = Array.from({ length: 365 });
  return (
    <div className='flex flex-col items-center w-full pt-30 '>
        <div className='w-6/12 flex'>
            <img src="/images/Mrc.png" alt="" className='w-70' />
            <div className='text-gray-400'>
                <h1 className='text-gray-100 font-bitcount text-3xl px-10'>John Marco Ardina</h1>
                <p className=" font-display font-saira text-lg  text-[15px] px-10 py-3">
                    I am a Full Stack Developer dedicated to helping teams build reliable and
                    effective solutions with passion and excellence.
                </p>  
                <p className="font-display font-saira text-lg  text-[15px] px-10 py-3">
                    Transforming creative ideas, code, and concepts into engaging digital experiences 
                    that inspire, solve problems, and create lasting impact.
                </p>
            </div>
            
        </div>
        
      
    
        
    </div>
  )
}
