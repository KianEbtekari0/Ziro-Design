import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import projectImg from '../assets/images/magas 2.webp';
import projectImg2 from '../assets/images/projects/8b008977f4e1e4ee0c3e8d6a34532e7d.webp';
import projectImg3 from '../assets/images/projects/l5r_cover2-1920x1200.webp';
import projectImg4 from '../assets/images/projects/wolverine-web-cover-1920x1042.webp';
import projectImg5 from '../assets/images/projects/loewe-couv-1920x1277.webp';
import gsap from 'gsap';
import '../index.css';

export default function Projects() {
  const items = [
    {
      name: 'VISUAL EFFECTS',
      src: projectImg,
      foregroundColor: '#000',
      backgroundColor: '#333',
    },
    {
      name: 'CINEMATIC FILMING',
      src: projectImg2,
      foregroundColor: '#ffffff',
      backgroundColor: '#171312',
    },
    {
      name: 'DESIGN LOGO MOTION',
      src: projectImg3,
      foregroundColor: '#ffffff',
      backgroundColor: '#002440',
    },
    {
      name: '3D ANIMATION',
      src: projectImg4,
      foregroundColor: '#ffffff',
      backgroundColor: '#251804',
    },
    {
      name: 'SEE ALL PROJECT',
      src: projectImg5,
      foregroundColor: '#ffffff',
      backgroundColor: '#002440',
      link: '/allprojects',
    },
  ];

  const [activeItem, setActiveItem] = useState(null);
  const previewRef = useRef(null);
  const containerRef = useRef(null);

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
  //
  // Note: In this case we are not handling responsiveness of the animated objects
  // since they are static. But we are handling the availability of anmiations
  // based on the screen sizes(mobile and tablet) for responsiveness in this case.
  const mm = useRef(null);

  const togglePreview = (item, isActive, e) => {
    if (isActive) {
      setActiveItem(item);
      // Highlight the project title to indicate focus and guide user attention
      gsap.to(e.target, {
        color: item.foregroundColor,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      setActiveItem(null);
      // Reset color when no longer active to maintain visual hierarchy
      gsap.to(e.target, { color: '#bebebe', duration: 0.3, ease: 'power2.out' });
    }
  };

  // Animates the preview image when the active item changes
  // Only runs if the container is visible (desktop)
  // Purpose: provide visual feedback and preview of the selected project
  useEffect(() => {
    const img = previewRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    if (activeItem && gsap.getProperty(container, 'display') !== 'none') {
      img.src = activeItem.src;
      gsap.killTweensOf(img);
      gsap.set(img, { display: 'block', opacity: 0, scale: 2 }); // start from hidden and scaled up
      gsap.to(img, {
        opacity: 1,
        scale: 1.9,
        duration: 0.6,
        ease: 'power2.out',
      }); // fade-in and scale animation
    } else {
      // Hide preview when no item is active or on smaller screens
      gsap.killTweensOf(img);
      gsap.to(img, {
        scale: 1.9,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => gsap.set(img, { display: 'none' }),
      });
    }
  }, [activeItem]);

  // Animate the background and text colors to match the active project
  // Provides a contextual visual cue to the user for immersive experience
  useEffect(() => {
    gsap.to('.bg-container', {
      backgroundColor: activeItem ? activeItem.backgroundColor : '#121B24',
      color: activeItem ? activeItem.foregroundColor : '#bebebe',
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [activeItem]);

  // Use GSAP matchMedia to handle responsive behavior
  // Purpose: hide the preview container on smaller screens to reduce clutter and improve UX
  useEffect(() => {
    mm.current = gsap.matchMedia();

    mm.current.add(
      {
        hidePreviewOnMobile: '(max-width: 1023px)', // hide on tablets and smaller
        showPreviewOnDesktop: '(min-width: 1024px)', // show on desktop for richer experience
      },
      (context) => {
        const { hidePreviewOnMobile, showPreviewOnDesktop } = context.conditions;
        const container = containerRef.current;

        if (hidePreviewOnMobile) {
          // Completely remove the preview to avoid unnecessary animations and DOM clutter
          gsap.set(container, { display: 'none' });
        }

        if (showPreviewOnDesktop) {
          // Ensure the preview container is visible on desktop where space allows
          gsap.set(container, { display: 'block' });
        }
      }
    );

    // Clean up matchMedia listeners on unmount
    return () => mm.current.revert();
  }, []);

  return (
    <div className="container" id="projects">
      <div className="bg-container relative z-0 rounded-[32px] px-5 py-9 sm:py-16">
        {/* Vertical instruction to guide the user */}
        <p
          className="absolute hidden sm:block top-1/2 -translate-y-1/2 text-xs sm:text-base rotate-180 font-Neue-Montreal-Bold uppercase text-white"
          style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
        >
          hover on title
        </p>

        <div className="flex flex-col items-center justify-center gap-4 text-center text-secondery">
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="z-0 inline-block font-Neue-Montreal-Bold text-[6.5vw] leading-[6.5vw] tracking-3pct text-secondery"
              onPointerEnter={(e) => togglePreview(item, true, e)}
              loading="lazy"
              onPointerLeave={(e) => togglePreview(item, false, e)}
            >
              {item.name}
            </Link>
          ))}

          {/* Preview image container */}
          {/* Hidden on mobile to simplify UI; only visible on desktop */}
          <div
            ref={containerRef}
            className="preview-container pointer-events-none absolute z-10 h-[500px] w-[800px] overflow-hidden rounded-3xl"
          >
            <img ref={previewRef} alt="preview" loading='lazy' className="h-full w-full object-cover opacity-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
