import { useState, useEffect, useRef } from 'react';
import projectsFilm1 from '../assets/images/projectsFilm/projectsFilm1.mp4';
import projectsFilm2 from '../assets/images/bg-video.mp4';
import { Link } from 'react-router';
import projectImg from '../assets/images/magas 2.png'
import gsap from 'gsap';
import '../index.css';

export default function Projects() {
  const items = [
    {
      name: 'VISUAL EFFECTS',
      src: projectsFilm1,
    },
    {
      name: 'CINEMATIC FILMING',
      src: projectsFilm2,
    },
    {
      name: 'design logo motion',
      src: projectsFilm1,
    },
    {
      name: '3D animation',
      src: projectsFilm1,
    },
    {
      name: 'SEE ALL PROJECT',
      src: projectsFilm1,
      link: '/allprojects'
    },
  ];

  const [hovered, setHovered] = useState(false);
  const previewRef = useRef(null)
  const cursorRef = useRef(null);
  const hideCall = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    if (hovered) {
      cursorRef.current.style.display = 'flex';
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power3.out',
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => {
          if (cursorRef.current) {
            cursorRef.current.style.display = 'none';
          }
        },
      });
    }
  }, [hovered]);

  const handleHover = (e) => {
    setHovered(true);

    hideCall.current?.kill?.();

    gsap.from(e.target, {
      transformOrigin: "left center",
      duration: 0.3,
      ease: "power2.out",
      color: "#fff",
      zIndex: 40,
      overwrite: "auto",
      yoyo: true,
      stagger: 0.1,
      repeat: 1,
    });

    gsap.set(previewRef.current, { display: "block" });
    gsap.from(previewRef.current, {
      opacity: 1,
      duration: 0.3,
      overwrite: "auto",
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
      pointerEvents: 'none'
    });
  };

  const handleMouseLeave = (e) => {
    setHovered(false);

    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      color: "#bebebe",
      zIndex: 0,
      overwrite: "auto",
    });

    hideCall.current = gsap.delayedCall(0.08, () => {
      gsap.to(previewRef.current, {
        opacity: 0,
        ease: "power2.out",
        duration: 0.4,
        overwrite: "auto",
        onComplete: () => {
          gsap.set(previewRef.current, { display: "none" });
        },
      });
    });
  };

  return (
    <div className='container'>
      <div className='bg-[#121B24] px-5 rounded-[32px] py-[70px] relative z-0'>
        <p className='uppercase font-Neue-Montreal-Bold text-white absolute top-[45%]' style={{writingMode: 'vertical-lr', textOrientation: 'mixed'}}>hover on title</p>
        <div className='text-secondery flex items-center justify-center flex-col gap-4 text-center'>
          {items.map(item => (
            <Link to={item.link} className='inline-block sm:text-7xl z-0 lg:text-8xl xl:text-9xl font-Neue-Montreal-Bold' onMouseMove={(e) => handleHover(e)} onMouseLeave={(e) => handleMouseLeave(e)}>{item.name}</Link>
          ))}
          <img src={projectImg} alt='preview' className='absolute z-10 w-[1000px] pointer-events-none rounded-3xl hidden' ref={previewRef} />
        </div>
        <div className='custom-cursor rounded-full' ref={cursorRef}>VIEW</div>
      </div>
    </div>
  );
}
