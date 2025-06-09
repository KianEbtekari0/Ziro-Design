import React from 'react'
import bgVideo from '../assets/images/bg-video.mp4'

export default function Home() {
  return (
    <div className='h-[90vh]'>
        <video autoPlay muted loop playsInline className='absolute top-0 left-0 w-full h-full object-cover z-0' src={bgVideo}>
            <source src={bgVideo} type='video/mp4' />
        </video>

        <div className='relative font-Greycliff-CF-extrabold h-full z-10 flex items-center text-center justify-center flex-col gap-10'>
            <h1 className='text-8xl text-white'>SAFAR POUR–CREATRIVE <br /> 3D ARTIST & MODELER <span className='text-primary'>.</span></h1>
            <button className='py-3 px-6 flex items-center justify-center gap-2 cursor-pointer bg-black text-white rounded-3xl'>
                Explore now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </button>
        </div>
    </div>
  )
}
