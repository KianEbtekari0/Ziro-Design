import { useState, useRef } from 'react';
import bgVideo from '../assets/images/magas 2.png';
import playImg from '../assets/images/playBtn.png';
import gsap from 'gsap';
import trendUp from '../assets/images/trend-up-02.svg';
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
      // When collapsing, the video should shrink into a “preview card”.
      // This state is intentionally smaller so it doesn’t dominate the screen.
      // On desktop (xl), we give it more presence with larger dimensions.
      // On mobile/tablet, it shrinks further so it feels lightweight.
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
              // Right-side play text and button is only useful on large screens.
              // On smaller devices, it’s hidden to avoid clutter.
              gsap.set(rightSideRef.current, {
                zIndex: 30,
                display: xl ? 'block' : 'none',
              });
            },
          });

          gsap.to(videoRef.current, {
            // Video preview scales with the container so it doesn’t feel oversized.
            width: xl ? '206px' : '180px',
            height: '100%',
            zIndex: 30,
            duration: 0.5,
            ease: 'power2.inOut',
          });
        }
      );
    } else {
      // When expanding, the video should feel immersive.
      // We use percentages instead of fixed pixels so it naturally adapts to any screen size.
      gsap.to(videoBoxRef.current, {
        width: '70%',
        height: '80%',
        bottom: 0,
        right: 0,
        zIndex: 30,
        duration: 0.5,
        ease: 'power2.inOut',
      });

      gsap.to(videoRef.current, {
        width: '100%',
        height: '100%',
        zIndex: 30,
        duration: 0.5,
        ease: 'power2.inOut',
      });

      // The right-side content doesn’t belong in fullscreen mode.
      // It would distract from the video, so we remove it immediately.
      gsap.set(rightSideRef.current, { display: 'none' });
    }

    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen">
      {/* Background image for visual depth */}
      <img
        className="absolute left-0 top-0 h-full w-full object-cover"
        alt="Background video"
        src={bgVideo}
      />

      {/* Hero section: communicates brand values with bold typography */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-center">
        <h1 className="mt-60 font-Neue-Montreal-Bold text-3xl uppercase tracking-3pct text-white sm:text-5xl lg:max-w-2xl lg:text-6xl xl:max-w-5xl xl:text-8xl">
          Safarpoor 3D & film ARTIST Designer
        </h1>

        {/* Call-to-action: styled with GlassElement to feel premium and tactile */}
        <button className="flex h-[43px] w-[135px] cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Regular text-sm text-white xl:h-[53px] xl:w-[157px] xl:text-base">
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
            <img src={trendUp} alt="trend up button" className="ml-1 mt-0.5" />
          </GlassElement>
        </button>
      </div>

      {/* Video preview box: starts small, expands when clicked */}
      <div
        ref={videoBoxRef}
        className="absolute bottom-5 right-5 z-30 flex w-[176px] justify-between xl:w-[318px]"
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
          <div className="flex cursor-pointer justify-between p-2">
            {/* Video thumbnail scales with the container */}
            <img
              ref={videoRef}
              className="video w-[180px] rounded-[30px] xl:w-[206px]"
              src={bgVideo}
              alt="popup Background video"
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
  );
}
