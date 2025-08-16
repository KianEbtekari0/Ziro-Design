import { useState, useEffect, useRef } from 'react';
import projectsFilm1 from '../assets/images/projectsFilm/projectsFilm1.mp4';
import projectsFilm2 from '../assets/images/bg-video.mp4';
import gsap from 'gsap';
import '../index.css';
import { Link } from 'react-router';

export default function Projects() {
  const items = [
    {
      name: 'VISUAL EFFECTS',
      description: 'A showcase of visual effects in cinematic filming.',
      src: projectsFilm1,
    },
    {
      name: 'CINEMATIC FILMING',
      description:
        'The Last of Us features highly detailed 3D assets like characters, weapons, and environments—crafted with realism to enhance immersion and storytelling.',
      src: projectsFilm2,
    },
    {
      name: '3D ANIMATION',
      description: 'A showcase of visual effects.',
      src: projectsFilm1,
    },
    {
      name: 'LOGO MOTION',
      description: 'A showcase of visual effects in cinematic filming.',
      src: projectsFilm1,
    },
  ];

  const [active, setActive] = useState(items[0]);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  const descRef = useRef(null);
  const cursorRef = useRef(null);

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

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: 'power2.out' }
      );
    }
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [active]);

  const handleHover = (item, e) => {
    setActive(item);
    setHovered(true);
    gsap.to(e.target, {
      transformOrigin: 'left center',
      duration: 0.3,
      ease: 'power2.out',
      color: '#fff',
    });
  };

  const handleMouseLeave = (e) => {
    setHovered(false);
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
      color: '#bebebe',
    });
  };

  return (
    <div className='container bg-[#121B24] rounded-[32px] py-[70px] relative'>
      <p className='uppercase font-Neue-Montreal-Bold text-white absolute top-[45%]' style={{writingMode: 'vertical-lr', textOrientation: 'mixed'}}>hover on title</p>
      <div className='text-white flex items-center justify-center flex-col gap-4 text-center'>
        <Link to='/' className='sm:text-7xl lg:text-8xl xl:text-9xl font-Neue-Montreal-Bold'>VFX VISUAL EFFECTS</Link>
        <Link to='/' className='sm:text-7xl lg:text-8xl xl:text-9xl font-Neue-Montreal-Bold uppercase'>Cinematic Filming</Link>
        <Link to='/' className='sm:text-7xl lg:text-8xl xl:text-9xl font-Neue-Montreal-Bold uppercase'>design logo motion</Link>
        <Link to='/' className='sm:text-7xl lg:text-8xl xl:text-9xl font-Neue-Montreal-Bold uppercase'>3D animation</Link>
        <Link to='/' className='sm:text-7xl lg:text-8xl xl:text-9xl font-Neue-Montreal-Bold uppercase'>SEE ALL PROJECT</Link>
      </div>
    </div>
  );
}
