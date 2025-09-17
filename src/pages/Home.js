import { useState, useRef } from 'react';
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

  // We use GSAP’s matchMedia so our animations adapt to Tailwind breakpoints.
  // This ensures that our motion logic is as responsive as our layout.
  //
  // The responsiveness of animated elements is a handled in the GSAP's
  // implementation and the responsiveness of the static elements is handled
  // withing the tailwind implementation. By doing so we follow the SRP
  // also known as the single responsibility principle and follow best practices
  // for scalability.
  //
  // A default layout is set in the tailwind properties for the animated objects.
  // The reason behind this is that the animated objects responsiveness is handled
  // after the item is clicked, so a default value is necessary.
  const mm = gsap.matchMedia();

const toggleVideo = () => {
  if (!isExpanded) {
    // حالت کوچک
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
          onComplete: () => {
            gsap.set(rightSideRef.current, {
              zIndex: 30,
              display: xl ? 'block' : 'none',
            });
          },
        });

        gsap.to(videoRef.current, {
          width: xl ? '206px' : '180px',
          height: '100%',
          zIndex: 30,
          duration: 0.5,
          ease: 'power2.inOut',
        });
      }
    );

    // برگردوندن ناوبار
    gsap.to("header", { autoAlpha: 1, duration: 0.3 });
  } else {
    // حالت فول‌اسکرین
    gsap.to(videoBoxRef.current, {
      width: '100%',
      height: '100%',
      bottom: 0,
      right: 0,
      zIndex: 9999, // بالاتر از ناوبار
      duration: 0.5,
      ease: 'power2.inOut',
    });

    gsap.to(videoRef.current, {
      width: '100%',
      height: '100%',
      zIndex: 9999,
      duration: 0.5,
      ease: 'power2.inOut',
    });

    // مخفی کردن ناوبار
    gsap.to("header", { autoAlpha: 0, duration: 0.3 });

    gsap.set(rightSideRef.current, { display: 'none' });
  }

  setIsExpanded(!isExpanded);
};


  return (
    <div className="h-[60vh] sm:h-screen">
      {/* Background image for visual depth */}
      <img
        className="absolute left-0 top-0 h-[60vh] w-full object-cover sm:h-screen"
        alt="Background video"
        loading="lazy"
        src={bgVideo}
      />

      {/* Hero section: communicates brand values with bold typography */}
      <div className="absolute top-0 z-10 flex h-[60vh] w-full flex-col items-center justify-center gap-4 text-center sm:h-screen sm:gap-10">
        <h1 className="px-5 font-Neue-Montreal-Bold text-3xl uppercase tracking-3pct text-white sm:max-w-2xl sm:text-5xl lg:text-6xl xl:max-w-[1100px] xl:text-8xl">
          Safarpoor 3D & film ARTIST Designer
        </h1>

        {/* Call-to-action: styled with GlassElement to feel premium and tactile */}
        <button className="flex h-[35px] w-[115px] cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Regular text-xs text-white sm:h-[43px] sm:w-[135px] sm:text-sm xl:h-[53px] xl:w-[157px] xl:text-base">
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
            <img src={trendUp} className="ml-1 mt-0.5" alt="trend up" />
          </GlassElement>
        </button>
        {/* Video preview box: starts small, expands when clicked */}
        <div
          ref={videoBoxRef}
          className="absolute bottom-5 right-5 z-50 flex w-40 justify-between sm:bottom-5 sm:w-[176px] xl:w-[318px]"
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
            <div className="flex cursor-pointer justify-between p-1.5 sm:p-2">
              {/* Video thumbnail scales with the container */}
              <img
                ref={videoRef}
                className="video w-[180px] rounded-[30px] xl:w-[206px]"
                src={bgVideo}
                alt="popup Background video"
                loading="lazy"
              />

              {/* Supplemental content: only relevant on desktop */}
              <div
                ref={rightSideRef}
                className="relative hidden flex-col justify-between px-2 xl:flex"
              >
                <p className="font-Neue-Montreal-Medium text-xl text-white">Discover full video</p>
                <button className="absolute bottom-1 right-2 flex h-8 w-8 rounded-full bg-black">
                  <img src={playImg} alt="play" />
                </button>
              </div>
            </div>
          </GlassElement>
        </div>
      </div>
    </div>
  );
}
