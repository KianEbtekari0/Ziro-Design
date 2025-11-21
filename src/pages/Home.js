import { useState, useRef, useEffect } from 'react';
import playImg from '../assets/images/icons/play.svg';
import trendUp from '../assets/images/icons/trend-up.svg';
import dots from '../assets/images/icons/dots.svg';
import { GlassElement } from '../components/GlassElement/GlassElement';

const bgVideo = new URL('../assets/images/magas 2.webp', import.meta.url).href;

export default function Products() {
  const [isExpanded, setIsExpanded] = useState(true);
  const videoBoxRef = useRef(null);
  const videoRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
  }, [isExpanded]);

  const toggleVideo = async () => {
    // dynamic import برای GSAP
    const { gsap } = await import('gsap');

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
        duration: 0.5,
        borderRadius: '30px',
        ease: 'power2.inOut',
      });

      gsap.to('header', { opacity: 1, duration: 0.3, delay: 0.3 });
    } else {
      gsap.to(videoBoxRef.current, {
        width: '100%',
        height: '100%',
        bottom: 0,
        right: 0,
        borderRadius: '0px',
        zIndex: 9999,
        duration: 0.6,
        ease: 'power2.inOut',
        onStart: () => gsap.set(rightSideRef.current, { display: 'none' }),
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
    }

    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* ✅ Responsive background image */}

      <img
        src={bgVideo}
        alt="Hero Background"
        className="h-full w-full object-cover"
        width={1920}
        height={1080}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />

      {/* ✅ Overlay content */}
      <div className="absolute top-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-4 text-center sm:gap-10">
        <h1 className="max-w-2xl px-5 font-Neue-Montreal-Bold text-4xl uppercase tracking-3pct text-white sm:text-5xl lg:max-w-[1100px] lg:text-6xl xl:text-8xl">
          Safarpoor 3D & Film Artist Designer
        </h1>

        <button
          className="flex h-[35px] w-[115px] cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Regular text-xs text-white sm:h-[43px] sm:w-[135px] sm:text-sm xl:h-[45px] xl:w-[157px] xl:text-base"
          aria-label="Explore projects"
        >
          <GlassElement
            width={100}
            height={100}
            radius={50}
            depth={10}
            blur={3}
            center="flex"
            chromaticAberration={5}
          >
            Explore now
            <img
              src={trendUp}
              className="ml-2 mt-0.5 w-2 xl:w-3"
              alt="trend up"
              loading="lazy"
              decoding="async"
            />
          </GlassElement>
        </button>

        {/* ✅ Video preview box */}
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
            center="flex"
            blur={4}
            chromaticAberration={2}
          >
            <div className="relative flex cursor-pointer justify-between p-1.5 sm:p-2">
              <img
                ref={videoRef}
                className="video rounded-[30px] xl:w-[206px]"
                src={bgVideo}
                alt="popup background preview"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />

              {/* ✅ Right text section */}
              <div
                ref={rightSideRef}
                className="relative hidden flex-col justify-between px-2 xl:flex"
              >
                <p className="font-Neue-Montreal-Medium text-xl text-white">Discover full video</p>
                <button
                  className="absolute bottom-1 right-2 flex h-8 w-8 rounded-full bg-black"
                  aria-label="Play video"
                >
                  <img src={playImg} alt="play icon" loading="lazy" decoding="async" />
                </button>
              </div>

              {/* ✅ Close button (lazy) */}
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
                    center="flex"
                    chromaticAberration={5}
                  >
                    Close
                    <img
                      src={dots}
                      className="ml-1.5 mt-0.5 w-1"
                      alt="dots"
                      loading="lazy"
                      decoding="async"
                    />
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
