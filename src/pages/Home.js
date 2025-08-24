import { useState, useRef, useEffect } from 'react'
import bgVideo from '../assets/images/magas 2.png'
import playImg from '../assets/images/playBtn.png'
import gsap from 'gsap'
import trendUp from '../assets/images/trend-up-02.svg'
import { GlassElement } from '../components/GlassElement/GlassElement'

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(true)

  const videoBoxRef = useRef(null)
  const videoRef = useRef(null)
  const rightSideRef = useRef(null)

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
  const mm = gsap.matchMedia()

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
          let { xl } = context.conditions

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
              })
            },
          })

          gsap.to(videoRef.current, {
            // Video preview scales with the container so it doesn’t feel oversized.
            width: xl ? '206px' : '180px',
            height: '100%',
            zIndex: 30,
            duration: 0.5,
            ease: 'power2.inOut',
          })
        }
      )
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
      })

      gsap.to(videoRef.current, {
        width: '100%',
        height: '100%',
        zIndex: 30,
        duration: 0.5,
        ease: 'power2.inOut',
      })

      // The right-side content doesn’t belong in fullscreen mode.
      // It would distract from the video, so we remove it immediately.
      gsap.set(rightSideRef.current, { display: 'none' })
    }

    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    // Ensure we clean up matchMedia listeners so they don’t stack over time.
    return () => mm.revert()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Background image for visual depth */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
      />

      {/* Hero section: communicates brand values with bold typography */}
      <div className="relative min-h-screen z-10 flex items-center text-center justify-center flex-col gap-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl text-white font-Neue-Montreal-Bold">
          Design<span className="text-primary">.</span> Animate
          <span className="text-primary">.</span> Impact
          <span className="text-primary">.</span>
          <br />
          ZIRODESIGN<span className="text-primary">.</span>
        </h1>

        {/* Call-to-action: styled with GlassElement to feel premium and tactile */}
        <GlassElement
          width={164}
          height={50}
          radius={50}
          depth={10}
          blur={3}
          center={'flex'}
          chromaticAberration={5}
        >
          <button className="py-2 lg:py-3 text-sm lg:text-base font-Neue-Montreal-Regular px-4 lg:px-6 flex items-center justify-center gap-1.5 cursor-pointer text-white rounded-3xl">
            Explore now
            <img src={trendUp} alt="trend up button" className="mt-0.5" />
          </button>
        </GlassElement>
      </div>

      {/* Video preview box: starts small, expands when clicked */}
      <div
        ref={videoBoxRef}
        className="absolute flex justify-between right-5 bottom-5 z-30 h-[105px] w-[175px] xl:w-[320px] xl:h-[125px]"
        onClick={toggleVideo}
      >
        <GlassElement
          radius={38}
          depth={10}
          center={'flex'}
          blur={3}
          chromaticAberration={5}
        >
          <div className="flex justify-between p-2 cursor-pointer">
            {/* Video thumbnail scales with the container */}
            <img
              ref={videoRef}
              className="video w-[180px] xl:w-[206px] rounded-[30px]"
              src={bgVideo}
            />

            {/* Supplemental content: only relevant on desktop */}
            <div
              ref={rightSideRef}
              className="hidden xl:flex justify-between relative flex-col px-2"
            >
              <p className="text-xl text-white font-Neue-Montreal-Medium">
                Discover full video
              </p>
              <button className="absolute right-2 bottom-1 bg-black flex w-8 h-8 rounded-full">
                <img src={playImg} alt="" />
              </button>
            </div>
          </div>
        </GlassElement>
      </div>
    </div>
  )
}
