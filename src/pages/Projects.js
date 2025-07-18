import { useState, useEffect, useRef } from 'react'
import projectsFilm1 from '../assets/images/projectsFilm/projectsFilm1.mp4'
import projectsFilm2 from '../assets/images/bg-video.mp4'
import gsap from 'gsap';

export default function Projects() {
    const items = [
        {
          name: 'VISUAL EFFECTS',
          description: 'A showcase of visual effects in cinematic filming.',
          src: projectsFilm1
        },
  
        {
          name: 'CINEMATIC FILMING',
          description: 'The Last of Us features highly detailed 3D assets like characters, weapons, and environments—crafted with realism to enhance immersion and storytelling.',
          src: projectsFilm2
        },
  
        {
          name: '3D ANIMATION',
          description: 'A showcase of visual effects ',
          src: projectsFilm1
        },
  
        {
          name: 'LOGO MOTION',
          description: 'A showcase of visual effects in cinematic filming.',
          src: projectsFilm1
        },

        {
          name: 'ALL PROJECTS',
          description: 'A showcase of visual effects in filming.',
          src: projectsFilm1
        }
    ]

    const [active, setActive] = useState(items[0]);
    const videoRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
        gsap.fromTo(
            videoRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.7, ease: "power2.out" }
        );
        }

        if (descRef.current) {
        gsap.fromTo(
            descRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
        }
    }, [active]);

    const handleHover = (item, e) => {
        setActive(item);

        gsap.to(e.target, {
            scale: 1.05,
            transformOrigin: "left center",
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.target, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

  return (
    <div className='relative'>
        <div className={`container flex py-24`}>
            <video
                key={active.src}
                src={active.src}
                ref={videoRef}
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-500"
            />

            <div className='inline-block justify-center space-y-5 flex-col'>
                {items.map(item => (
                    <><a href='#' className={`text-white text-9xl font-Neue-Montreal-Bold transition-opacity ${active.name === item.name ? 'text-white' : 'text-secondery'}`} onMouseLeave={(e) => handleMouseLeave(e)} onMouseEnter={(e) => handleHover(item, e)}>{item.name}</a><br /></>
                ))}
            </div>
            <div className='max-w-sm leading-relaxed self-end flex flex-col justify-end gap-1'>
                <p className='bg-[#1A1A1A] text-white w-[198px] text-base font-Neue-Montreal-Bold py-1 px-2 rounded-md inline-block'>3D DESIGN CHARACTER</p>
                <h1 className='text-white font-Neue-Montreal-Bold text-2xl' ref={descRef}>{active.description}</h1>
            </div>
        </div>
    </div>
  )
}
