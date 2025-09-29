import { useState, useRef, useEffect } from 'react';
import bgVideo from '../assets/images/magas 2.png';
import playImg from '../assets/images/icons/play.svg';
import gsap from 'gsap';
import trendUp from '../assets/images/icons/trend-up.svg';
import { GlassElement } from '../components/GlassElement/GlassElement';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(true);

  const videoBoxRef = useRef(null);
  const videoRef = useRef(null);
  const rightSideRef = useRef(null);
  const videoPadding = useRef(null);

  const mm = gsap.matchMedia();

  useEffect(() => {
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isExpanded]);

  const toggleVideo = () => {
    if (!isExpanded) {
      mm.add(
        {
          sm: '(min-width: 640px)',
          md: '(min-width: 768px)',
          lg: '(min-width: 1024px)',
          xl: '(min-width: 1280px)',
        },
        (context) => {
          let { xl } = context.conditions;

          gsap.to(videoBoxRef.current, {
            width: xl ? '320px' : '175px',
            height: xl ? '125px' : '105px',
            bottom: 20,
            right: 20,
            zIndex: 30,
            duration: 0.5,
            ease: 'power2.inOut',
            onStart: () => {
              // همون لحظه hide میشه
              gsap.set(rightSideRef.current, { display: 'none' });
            },
            onComplete: () => {
              if (xl) {
                // وقتی باکس کوچیک شد → ظاهر شه
                gsap.set(rightSideRef.current, { display: 'block' });
                gsap.fromTo(
                  rightSideRef.current,
                  { autoAlpha: 0, },
                  { autoAlpha: 1, duration: 0.4, ease: 'power2.out' }
                );
              }
            },
          });

          gsap.to(videoRef.current, {
            width: xl ? '206px' : '180px',
            height: 107.5,
            x: 0,
            y: 0,
            zIndex: 30,
            duration: 0.5,
            ease: 'power2.inOut',
          });

          gsap.set(videoPadding.current, {
            padding: xl ? 8 : 6,
          });
        }
      );

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
        zIndex: 9999,
        duration: 0.6,
        ease: 'power2.inOut',
        onStart: () => {
          // موقع fullscreen همون لحظه پنهان شه
          gsap.set(rightSideRef.current, { display: 'none', duration: 0.3 });
        },
      });

      gsap.to(videoRef.current, {
        width: '98vw',
        height: '96vh',
        zIndex: 9999,
        duration: 0.6,
        ease: 'power2.inOut',
      });

      gsap.to('header', { opacity: 0, duration: 0.3 });

      gsap.set(videoPadding.current, {
        padding: 0,
      });

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
      <img
        className="absolute left-0 top-0 w-full object-cover h-screen"
        alt="Background video"
        loading="lazy"
        src={bgVideo}
      />

      <div className="absolute top-0 z-10 flex w-full flex-col items-center justify-center gap-4 text-center h-screen sm:gap-10">
        <h1 className="px-5 font-Neue-Montreal-Bold text-4xl uppercase tracking-3pct text-white sm:max-w-2xl sm:text-5xl lg:text-6xl xl:max-w-[1100px] xl:text-8xl">
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
            <img src={trendUp} className="ml-1 mt-0.5 w-4 xl:w-5" alt="trend up" />
          </GlassElement>
        </button>

        {/* Video preview box */}
        <div
          ref={videoBoxRef}
          className="absolute bottom-4 right-4 z-50 flex w-40 justify-between sm:bottom-5 sm:w-[176px] xl:bottom-6 xl:right-6 xl:w-[318px]"
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
            <div
              className="relative flex cursor-pointer justify-between p-1.5 sm:p-2"
              ref={videoPadding}
            >
              <img
                ref={videoRef}
                className="video w-[180px] rounded-[30px] xl:w-[206px]"
                src={bgVideo}
                alt="popup Background video"
                loading="lazy"
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
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVideo();
                  }}
                  className="absolute right-3 top-3 z-[10000] rounded-full bg-black/70 px-3 py-1 text-white"
                >
                  Close
                </button>
              )}
            </div>
          </GlassElement>
        </div>
      </div>
    </div>
  );
}
