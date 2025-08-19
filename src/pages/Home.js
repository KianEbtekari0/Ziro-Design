import { useState } from 'react'
import bgVideo from '../assets/images/magas 2.png'
import playImg from '../assets/images/playBtn.png'
import gsap from 'gsap'
import trendUp from '../assets/images/trend-up-02.svg'
import { GlassElement } from '../components/GlassElement/GlassElement'

export default function Home() {

  const [isExpanded, setIsExpanded] = useState(false);

   const toggleVideo = () => {
    if (isExpanded) {
      gsap.to(['.videoBox'], {
        width: "320px",
        height: '125px',
        bottom: 20,
        right: 20,
        zIndex: 30,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to('.rightSide', {
        zIndex: 30,
        display: 'block',
      });
    } else {
      gsap.to('.videoBox', {
        width: "100%",
        height: "100%",
        bottom: 0,
        right: 0,
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
    <div className='min-h-screen'>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
      />
      <div className='relative z-10 flex items-center text-center justify-center flex-col mt-[250px] gap-10'>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl xl:text-8xl text-white font-Neue-Montreal-Bold'>Design<span className='text-primary'>.</span> Animate<span className='text-primary'>.</span> Impact<span className='text-primary'>.</span><br /> ZIRODESIGN<span className='text-primary'>.</span></h1>
        <GlassElement
          width={164}
          height={50}
          radius={50}
          depth={10}
          blur={3}
          center={'flex'}
          chromaticAberration={5}
        >
          <button className='py-2 lg:py-3 text-sm lg:text-base font-Neue-Montreal-Regular px-4 lg:px-6 flex items-center justify-center gap-1.5 cursor-pointer text-white rounded-3xl'>
              Explore now
              <img src={trendUp} alt="trend up button" className='mt-0.5' />
          </button>
        </GlassElement>
      </div>

    <div className='videoBox absolute flex justify-between right-5 bottom-5' onClick={() => toggleVideo()}>
      <GlassElement
        width={320}
        height={125}
        radius={38}
        depth={10}
        center={'flex'}
        blur={3}
        chromaticAberration={5}
      >
        <div className='flex justify-between px-2 cursor-pointer z-40'>
          <img className='video w-[150px] lg:w-[206px] rounded-[30px]' src={bgVideo}></img>
          <div className={`flex justify-between flex-col items-end ${isExpanded === true ? 'hidden' : 'flex'}`}>
            <p className='ml-3 text-xl text-white font-Neue-Montreal-Medium'>Discover full video</p>
            <button className='mr-2 bg-black flex items-center justify-center w-8 h-8 rounded-full'>
                <img src={playImg} alt="" /> 
            </button>
          </div>
        </div>
      </GlassElement>
    </div>
    </div>
  )
}
