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
  const mm = useRef(null);

  // ⚡ Preload all images on mount to prevent network delay on Vercel
  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, []);

  const togglePreview = (item, isActive, e) => {
    if (isActive) {
      setActiveItem(item);
      gsap.to(e.target, {
        color: item.foregroundColor,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      setActiveItem(null);
      gsap.to(e.target, { color: '#bebebe', duration: 0.3, ease: 'power2.out' });
    }
  };

  useEffect(() => {
    const img = previewRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    if (activeItem && gsap.getProperty(container, 'display') !== 'none') {
      img.src = activeItem.src;
      gsap.killTweensOf(img);
      gsap.set(img, { display: 'block', opacity: 0, scale: 2 });
      gsap.to(img, {
        opacity: 1,
        scale: 1.9,
        duration: 0.6,
        ease: 'power2.out',
      });
    } else {
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

  useEffect(() => {
    gsap.to('.bg-container', {
      backgroundColor: activeItem ? activeItem.backgroundColor : '#121B24',
      color: activeItem ? activeItem.foregroundColor : '#bebebe',
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [activeItem]);

  useEffect(() => {
    mm.current = gsap.matchMedia();

    mm.current.add(
      {
        hidePreviewOnMobile: '(max-width: 1023px)',
        showPreviewOnDesktop: '(min-width: 1024px)',
      },
      (context) => {
        const { hidePreviewOnMobile, showPreviewOnDesktop } = context.conditions;
        const container = containerRef.current;

        if (hidePreviewOnMobile) gsap.set(container, { display: 'none' });
        if (showPreviewOnDesktop) gsap.set(container, { display: 'block' });
      }
    );

    return () => mm.current.revert();
  }, []);

  return (
    <div className="container" id="projects">
      <div className="bg-container relative z-0 rounded-[32px] px-5 py-9 sm:py-16">
        <p
          className="absolute top-1/2 hidden -translate-y-1/2 rotate-180 font-Neue-Montreal-Bold text-xs uppercase text-white sm:block sm:text-base"
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
              onPointerLeave={(e) => togglePreview(item, false, e)}
            >
              {item.name}
            </Link>
          ))}

          <div
            ref={containerRef}
            className="preview-container pointer-events-none absolute z-10 h-[500px] w-[800px] overflow-hidden rounded-3xl"
          >
            <img
              ref={previewRef}
              alt="preview"
              loading="lazy"
              className="h-full w-full object-cover opacity-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
