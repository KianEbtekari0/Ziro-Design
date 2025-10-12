import { useState, useRef, useEffect } from 'react';
import bgVideo from '../assets/images/magas 2.webp';
import playImg from '../assets/images/icons/play.svg';
import bgVideoMobile from '../assets/images/magas 2 mobile.svg';
import gsap from 'gsap';
import trendUp from '../assets/images/icons/trend-up.svg';
import dots from '../assets/images/icons/dots.svg';
import { GlassElement } from '../components/GlassElement/GlassElement';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(true);

  const videoBoxRef = useRef(null);
  const videoRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isExpanded]);

  const toggleVideo = () => {
    if (!isExpanded) {
      gsap.to(videoBoxRef.current, {
        width: window.innerWidth >= 1280 ? '320px' : '175px',
        height: window.innerWidth >= 1280 ? '125px' : '105px',
        bottom: 20,
        right: 20,
        zIndex: 30,
        duration: 0.5,
        borderRadius: '30px',
        overflow: 'hidden',
        ease: 'power2.inOut',
        onStart: () => gsap.set(rightSideRef.current, { display: 'none' }),
        onComplete: () => {
          if (window.innerWidth >= 1280) {
            gsap.set(rightSideRef.current, { display: 'flex' });
            gsap.fromTo(
              rightSideRef.current,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.4, ease: 'power2.out' }
            );
          }
        },
      });

      gsap.to(videoRef.current, {
        width: window.innerWidth >= 1280 ? '206px' : '180px',
        height: 107.5,
        x: 0,
        y: 0,
        zIndex: 30,
        duration: 0.5,
        borderRadius: '30px',
        ease: 'power2.inOut',
      });

      gsap.to('header', { opacity: 100, duration: 0.3, delay: 0.3 });

      gsap.to(document.body, {
        duration: 0.5,
        onComplete: () => {
          document.body.style.overflow = 'auto';
        },
      });
    } else {
      gsap.to(videoBoxRef.current, {
        width: '100%',
        height: '100%',
        bottom: 0,
        right: 0,
        borderRadius: '0px', // full screen دیگر radius ن
        zIndex: 9999,
        duration: 0.6,
        ease: 'power2.inOut',
        onStart: () => gsap.set(rightSideRef.current, { display: 'none', duration: 0.3 }),
      });

      gsap.to(videoRef.current, {
        width: '97vw',
        height: '95vh',
        borderRadius: '30px',
        duration: 0.6,
        objectFit: window.innerWidth >= 1280 ? 'cover' : 'contain',
        zIndex: 9999,
        ease: 'power2.inOut',
      });

      gsap.to('header', { opacity: 0, duration: 0.3 });

      gsap.to(document.body, {
        duration: 0.5,
        delay: 0.7,
        onStart: () => {
          document.body.style.overflow = 'hidden';
        },
      });
    }

    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-screen">
      {/* Background image */}
      <picture>
        <source media="(max-width: 640px)" srcSet={bgVideoMobile} />
        <img
          src={bgVideo}
          alt="Hero Background"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </picture>

      <div className="absolute top-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-4 text-center sm:gap-10">
        <h1 className="max-w-2xl px-5 font-Neue-Montreal-Bold text-4xl uppercase tracking-3pct text-white sm:text-5xl lg:max-w-[1100px] lg:text-6xl xl:text-8xl">
          Safarpoor 3D & film ARTIST Designer
        </h1>

        <button className="flex h-[35px] w-[115px] cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Regular text-xs text-white sm:h-[43px] sm:w-[135px] sm:text-sm xl:h-[45px] xl:w-[157px] xl:text-base">
          <GlassElement
            width={100}
            height={100}
            radius={50}
            depth={10}
            blur={3}
            center={'flex'}
            chromaticAberration={5}
          >
            Explore now
            <img src={trendUp} className="ml-2 mt-0.5 w-2 xl:w-3" alt="trend up" />
          </GlassElement>
        </button>

        {/* Video preview box */}
        <div
          ref={videoBoxRef}
          className="absolute bottom-4 right-4 z-50 flex w-40 justify-between rounded-[38px] sm:bottom-5 sm:w-[176px] xl:bottom-6 xl:right-6 xl:w-[318px]"
          onClick={toggleVideo}
        >
          <GlassElement
            height={100}
            width={100}
            radius={38}
            depth={10}
            center={'flex'}
            blur={4}
            chromaticAberration={2}
          >
            <div className="relative flex cursor-pointer justify-between p-1.5 sm:p-2">
              <img
                ref={videoRef}
                className="video rounded-[30px] xl:w-[206px]"
                src={bgVideo}
                alt="popup Background video"
              />

              <div
                ref={rightSideRef}
                className="relative hidden flex-col justify-between px-2 xl:flex"
              >
                <p className="font-Neue-Montreal-Medium text-xl text-white">Discover full video</p>
                <button className="absolute bottom-1 right-2 flex h-8 w-8 rounded-full bg-black">
                  <img src={playImg} alt="play" />
                </button>
              </div>

              {!isExpanded && (
                <button
                  className="absolute left-1/2 top-10 z-[10000] flex h-[35px] w-[70px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Medium text-xs text-white sm:h-[43px] sm:w-[70px] sm:text-sm xl:h-[46px] xl:w-[87px] xl:text-base"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVideo();
                  }}
                >
                  <GlassElement
                    width={100}
                    height={100}
                    radius={50}
                    depth={10}
                    blur={3}
                    center={'flex'}
                    chromaticAberration={5}
                  >
                    Close
                    <img src={dots} className="ml-1.5 mt-0.5 w-1" alt="dots" />
                  </GlassElement>
                </button>
              )}
            </div>
          </GlassElement>
        </div>
      </div>
    </div>
  );
}
