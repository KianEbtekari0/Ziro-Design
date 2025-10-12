import { useState } from 'react';
import rightArrow from '../assets/images/icons/right-arrow.svg';
import { GlassElement } from '../components/GlassElement/GlassElement';
import projectsImg from '../assets/images/projects/modelImg.webp';
import projectsImg1 from '../assets/images/projects/12.webp';
import projectsImg3 from '../assets/images/projects/testy.webp';
import projectsImg4 from '../assets/images/projects/C==.webp';
import projectsImg5 from '../assets/images/projects/Logo.webp';
import projectsImg6 from '../assets/images/projects/final 3k.webp';
import projectsImg7 from '../assets/images/projects/Rain-022.1038.webp';
import projectsImg8 from '../assets/images/projects/keycap.webp';
import projectsImg9 from '../assets/images/projects/hamsaye saqf.webp';
import Box from '@mui/material/Box';
import DarkVeil from '../components/DarkVeil';
import Masonry from '@mui/lab/Masonry';

export default function AllProjects() {
  const [projects, ] = useState([
    { id: 1, title: 'product2', preview_url: projectsImg1, tags: 'VFX Video' },
    { id: 2, title: 'product', preview_url: projectsImg, tags: 'Character' },
    { id: 3, title: 'product', preview_url: projectsImg3, tags: 'Photo' },
    { id: 4, title: 'product2', preview_url: projectsImg4, tags: '3D Objects' },
    { id: 5, title: 'product', preview_url: projectsImg5, tags: 'Character' },
    { id: 6, title: 'product', preview_url: projectsImg6, tags: 'VFX video' },
    { id: 7, title: 'product', preview_url: projectsImg7, tags: 'Photo' },
    { id: 8, title: 'product', preview_url: projectsImg8, tags: 'Character' },
    { id: 9, title: 'product', preview_url: projectsImg9, tags: 'VFX Video' },
  ]);

  return (
    <div className="container">
      <div className="absolute left-0 top-0 z-0 h-[300px] lg:h-[500px] w-full">
        <DarkVeil speed={0.75} scanlineFrequency={5} scanlineIntensity={0} warpAmount={4} />
      </div>
      <div className="z-30 flex flex-col items-center justify-center">
        <h1 className="z-30 text-center mt-36 xl:mt-40 font-Neue-Montreal-Bold text-3xl xs:text-4xl tracking-3pct text-white sm:max-w-3xl sm:text-6xl lg:text-7xl xl:max-w-[1100px] xl:text-8xl">
          Gallery Of My Projects
        </h1>
        <p className="z-30 mt-3 sm:mt-10 max-w-xs text-center font-Neue-Montreal-Bold text-xs tracking-3pct text-white sm:max-w-xl sm:text-xl xl:max-w-3xl xl:text-3xl">
          A versatile designer skilled in 2D design, 3D modeling, motion graphics, and Blender. With
          a strong creative vision a
          <span className="text-secondery">
            Their art is a fusion of beauty, motion, and storytelling.
          </span>
        </p>
        <h1
          className="animate-shine z-30 mt-6 flex items-center gap-2 bg-clip-text font-Neue-Montreal-Medium text-xs sm:text-base"
          style={{
            backgroundImage: 'linear-gradient(120deg, #ffffff 50%, #dbdbdba4 60%, #ffffff 70%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animationDuration: '3s',
          }}
        >
          Ready to See <img src={rightArrow} alt="arrow right" className="mt-0.5 w-3 sm:w-3.5" />
        </h1>
      </div>
      <Box className="mt-14 sm:mt-20 xl:mt-28">
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={1}>
          {projects.map((item) => (
            <div
              key={item.id}
              className="relative aspect-auto max-h-[700px] overflow-hidden rounded-xl shadow [break-inside:avoid] sm:max-h-max"
            >
              <img
                src={item.preview_url}
                alt={item.title}
                className="block h-full w-full"
                loading="lazy"
              />
              {/* Projects Tag */}
              <button className="absolute bottom-4 left-4 flex h-[35px] cursor-pointer items-center justify-center gap-1.5 font-Neue-Montreal-Regular text-sm text-white [text-shadow:_0_1px_10px_#000] xl:h-[46px] xl:text-base">
                <GlassElement
                  width={100}
                  height={100}
                  radius={38}
                  depth={10}
                  blur={3}
                  center={'flex'}
                  chromaticAberration={5}
                >
                  <span className="px-4">{item.tags}</span>
                </GlassElement>
              </button>
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
}
