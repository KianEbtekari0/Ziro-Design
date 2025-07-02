import React from 'react'
import bgVideo from '../assets/images/bg-video.mp4'
import playImg from '../assets/images/play.png'

export default function Home() {
  return (
    <div className='relative h-screen w-full overflow-hidden bg-black z-10'>
        <video autoPlay muted loop playsInline className='absolute top-0 left-0 w-full object-cover -z-10' src={bgVideo}>
            <source src={bgVideo} type='video/mp4' />
        </video>

        <div className='relative  h-full z-10 flex items-center text-center justify-center flex-col gap-10'>
            <h1 className='text-2xl sm:text-4xl lg:text-6xl xl:text-8xl text-white font-Neue-Montreal-Bold'>SAFAR POUR–CREATRIVE <br /> 3D ARTIST & MODELER <span className='text-primary'>.</span></h1>
            <button className='py-3 font-Neue-Montreal-Regular px-6 transition-all ease-in-out backdrop-blur-3xl flex items-center justify-center gap-2 cursor-pointer text-white rounded-3xl'>
                Explore now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mt-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </button>
        </div>

        <div className='absolute flex justify-between bg-white right-5 bottom-5 p-1.5 w-[250px] lg:w-[320px] rounded-xl'>
            <video autoPlay muted loop playsInline className='w-[150px] lg:w-[200px] rounded-lg' src={bgVideo}>
                <source src={bgVideo} type='video/mp4' />
            </video>
            <div className='flex justify-between flex-col items-end'>
                <p className='ml-3 text-xl font-Neue-Montreal-Medium'>Discover full video</p>
                <button className='mr-2 bg-black flex items-center justify-center w-8 h-8 rounded-full'>
                    <img src={playImg} alt="" /> 
                </button>
            </div>
        </div>
    </div>
  )
}
