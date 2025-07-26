import { useState } from 'react'
import bgVideo from '../assets/images/bg-video.mp4'
import playImg from '../assets/images/playBtn.png'
import gsap from 'gsap'
import trendUp from '../assets/images/trend-up-02.svg'

export default function Home() {

  const [isExpanded, setIsExpanded] = useState(false);

   const toggleVideo = () => {
    gsap.to('.rightSide', {
        zIndex: 30,
      display: 'none',
    });

    if (isExpanded) {
      gsap.to(['.videoBox'], {
        width: "320px",
        height: '125px',
        margin: "0",
        zIndex: 30,
        duration: 0.5,
        ease: "power2.inOut",
        zIndex: 30,
      });

      gsap.to('.rightSide', {
        zIndex: 30,
        display: 'block',
      });
    } else {
      gsap.to(['.videoBox', '.video'], {
        width: "98%",
        height: "95%",
        zIndex: 30,
      });

      gsap.to('.video', {
        width: "100%",
        height: "100%",
        zIndex: 30,
      });
    }

    setIsExpanded(!isExpanded);
  };

  return (
    <div className='relative h-screen w-full overflow-hidden bg-black z-10' onClick={() => toggleVideo()}>
        <video autoPlay muted loop playsInline className='absolute top-0 left-0 w-full object-cover -z-10' src={bgVideo}>
            <source src={bgVideo} type='video/mp4' />
        </video>

        <div className='relative h-full z-10 flex items-center text-center justify-center flex-col gap-10'>
            <h1 className='text-2xl sm:text-4xl lg:text-6xl xl:text-8xl text-white font-Neue-Montreal-Bold'>SAFAR POUR–CREATRIVE <br /> 3D ARTIST & MODELER <span className='text-primary'>.</span></h1>
            <button className='glassBtn py-3 font-Neue-Montreal-Regular px-6 transition-all ease-in-out backdrop-blur-3xl flex items-center justify-center gap-1.5 cursor-pointer text-white rounded-3xl'>
                Explore now
                <img src={trendUp} alt="trend up button" className='mt-0.5' />
            </button>
        </div>

        <div className='videoBox absolute flex justify-between right-5 bottom-5 p-1.5 w-[250px] lg:w-[320px] rounded-3xl'>
            <video autoPlay muted loop playsInline className='video w-[150px] lg:w-[200px] rounded-2xl' src={bgVideo}>
                <source src={bgVideo} type='video/mp4' />
            </video>
            <div className='rightSide flex justify-between flex-col items-end'>
                <p className='ml-3 text-xl text-white font-Neue-Montreal-Medium'>Discover full video</p>
                <button className='mr-2 bg-black flex items-center justify-center w-8 h-8 rounded-full'>
                    <img src={playImg} alt="" /> 
                </button>
            </div>
        </div>
    </div>
  )
}
