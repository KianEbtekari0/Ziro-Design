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
import Masonry from '@mui/lab/Masonry';

export default function AllProjects() {
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const [projects, setProjects] = useState([
    { id: 1, title: 'product2', preview_url: projectsImg1 },
    { id: 2, title: 'product', preview_url: projectsImg },
    { id: 3, title: 'product', preview_url: projectsImg3 },
    { id: 4, title: 'product2', preview_url: projectsImg4 },
    { id: 5, title: 'product', preview_url: projectsImg5 },
    { id: 6, title: 'product', preview_url: projectsImg6 },
    { id: 7, title: 'product', preview_url: projectsImg7 },
    { id: 8, title: 'product', preview_url: projectsImg8 },
    { id: 9, title: 'product', preview_url: projectsImg9 },
  ]);

  return (
    <div className="container mt-20 lg:mt-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-Neue-Montreal-Bold text-4xl tracking-3pct text-white sm:max-w-2xl sm:text-5xl lg:text-6xl xl:max-w-[1100px] xl:text-8xl">
          Gallery Of My Projects
        </h1>
        <p className="mt-5 max-w-xs text-center font-Neue-Montreal-Bold text-xs tracking-3pct text-white sm:max-w-xl xl:max-w-3xl sm:text-xl xl:text-3xl">
          A versatile designer skilled in 2D design, 3D modeling, motion graphics, and Blender. With
          a strong creative vision a
          <span className="text-secondery">
            Their art is a fusion of beauty, motion, and storytelling.
          </span>
        </p>
        <h1 className="mt-4 flex items-center gap-2 font-Neue-Montreal-Medium text-xs text-white sm:text-base">
          Ready to See <img src={rightArrow} alt="arrow right" className="w-3 sm:w-3.5" />
        </h1>
      </div>
      <Box className="mt-28">
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
              <button className="absolute bottom-4 left-4 flex h-[35px] w-[70px] cursor-pointer items-center justify-center gap-1.5 font-Neue-Montreal-Regular text-sm text-white xl:h-[46px] xl:w-[90px] xl:text-base">
                <GlassElement
                  width={100}
                  height={100}
                  radius={38}
                  depth={10}
                  blur={3}
                  center={'flex'}
                  chromaticAberration={5}
                >
                  {item.tags && 'LOGO'}
                </GlassElement>
              </button>
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
}
