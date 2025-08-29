import { useState } from 'react';
import rightArrow from '../assets/images/rightArrow.png';
import { GlassElement } from '../components/GlassElement/GlassElement';
import projectsImg from '../assets/images/projects/modelImg.png';
import projectsImg1 from '../assets/images/projects/12.png';
import projectsImg3 from '../assets/images/projects/testy.png';
import projectsImg4 from '../assets/images/projects/C==.png';
import projectsImg5 from '../assets/images/projects/Logo.png';
import projectsImg6 from '../assets/images/projects/final 3k.png';
import projectsImg7 from '../assets/images/projects/Rain-022.1038.png';
import projectsImg8 from '../assets/images/projects/keycap.png';
import projectsImg9 from '../assets/images/projects/hamsaye saqf.png';
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

  fetch('https://api.gumroad.com/v2/products', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => setProjects(data.products))
    .catch((err) => console.error(err));

  return (
    <div className="container mt-40">
      <h1 className="font-Neue-Montreal-Bold text-8xl text-white">Gallery Of My Projects</h1>
      <p className="mb-4 mt-6 max-w-5xl font-Neue-Montreal-Bold text-3xl text-white">
        A versatile designer skilled in 2D design, 3D modeling, motion graphics, and Blender. With a
        strong creative vision and mastery of design principles, they
        <span className="text-secondery">
          Combining professional tools with fresh ideas, they breathe life into every project. Their
          art is a fusion of beauty, motion, and storytelling.
        </span>
      </p>
      <GlassElement
        width={140}
        height={45}
        radius={50}
        depth={10}
        blur={3}
        center={'flex'}
        chromaticAberration={5}
      >
        <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-3xl font-Neue-Montreal-Regular text-sm text-white lg:text-base">
          Let's See
          <img src={rightArrow} alt="trend up button" className="mt-0.5 w-5" />
        </button>
      </GlassElement>
      <Box className="mt-14">
        <Masonry columns={{ xs: 2, sm: 2, md: 3 }} spacing={1}>
          {projects.map((item) => (
            <div
              key={item.id}
              className="relative aspect-auto overflow-hidden rounded-xl shadow [break-inside:avoid]"
            >
              <img
                src={item.preview_url}
                alt={item.title}
                className="block h-full w-full"
                loading="lazy"
              />
              {/* Projects Tag */}
              <button className="absolute bottom-4 left-4 flex h-[46px] w-[90px] cursor-pointer items-center justify-center gap-1.5 font-Neue-Montreal-Regular text-base text-white">
                <GlassElement
                  width={90}
                  height={46}
                  radius={38}
                  depth={10}
                  blur={3}
                  center={'flex'}
                  chromaticAberration={5}
                >
                  {item.tags ?? 'LOGO'}
                </GlassElement>
              </button>
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
}
