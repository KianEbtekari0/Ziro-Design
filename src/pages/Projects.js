import { useState, useEffect, useRef } from 'react';
import projectsFilm1 from '../assets/images/projectsFilm/projectsFilm1.mp4';
import projectsFilm2 from '../assets/images/bg-video.mp4';
import gsap from 'gsap';
import '../index.css';

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
      scale: 1.05,
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
    <div className="relative">
      <div className="container flex py-24">
        <video
          key={active.src}
          src={active.src}
          ref={videoRef}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-500"
        />

        <div className="flex justify-center relative">
          <div className="flex relative justify-center flex-col">
            {items.map((item) => (
              <div key={item.name}>
                <a
                  href="#"
                  className={`text-secondery relative text-9xl font-Neue-Montreal-Bold transition-opacity ${
                    active.name === item.name ? 'text-white' : 'text-secondery'
                  }`}
                  onMouseEnter={(e) => handleHover(item, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.name}
                </a>
                <br />
              </div>
            ))}
            <a
              href="#"
              className="text-secondery relative text-7xl font-Neue-Montreal-Bold transition-opacity"
            >
              SEE ALL PROJECTS
            </a>
          </div>
          <div className="glassCard left-[1000px] bottom-10 absolute p-5 max-w-sm leading-relaxed rounded-3xl w-full self-end flex flex-col justify-end gap-1">
            <h1
              className="text-white font-Neue-Montreal-Bold text-2xl"
              ref={descRef}
            >
              {active.description}
            </h1>
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor glassCard font-Neue-Montreal-Bold rounded-full">
        VIEW
      </div>
    </div>
  );
}
