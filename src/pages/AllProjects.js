import { memo, useState, useEffect } from 'react';
import rightArrow from '../assets/images/icons/right-arrow.svg';
import { GlassElement } from '../components/GlassElement/GlassElement';
import Box from '@mui/material/Box';
import DarkVeil from '../components/DarkVeil';
import Masonry from '@mui/lab/Masonry';
import { Skeleton } from '../components/skeleton';

const projects = [
  { id: 1, title: 'product2', preview_url: 'projects/12.webp', tags: 'VFX Video' },
  { id: 2, title: 'product', preview_url: 'projects/modelImg.webp', tags: 'Character' },
  { id: 3, title: 'product', preview_url: 'projects/testy.webp', tags: 'Photo' },
  { id: 4, title: 'product2', preview_url: 'projects/C==.webp', tags: '3D Objects' },
  { id: 5, title: 'product', preview_url: 'projects/Logo.webp', tags: 'Character' },
  { id: 6, title: 'product', preview_url: 'projects/final 3k.webp', tags: 'VFX video' },
  { id: 7, title: 'product', preview_url: 'projects/Rain-022.1038.webp', tags: 'Photo' },
  { id: 8, title: 'product', preview_url: 'projects/keycap.webp', tags: 'Character' },
  { id: 9, title: 'product', preview_url: 'projects/hamsaye saqf.webp', tags: 'VFX Video' },
];

function AllProjects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container overflow-x-hidden">
      <div className="absolute left-0 top-0 z-0 h-[300px] w-full lg:h-[500px]">
        <DarkVeil speed={0.75} scanlineFrequency={5} scanlineIntensity={0} warpAmount={4} />
      </div>

      <div className="z-30 flex flex-col items-center justify-center">
        <h1 className="z-30 mt-24 text-center font-Neue-Montreal-Bold text-3xl tracking-3pct text-white xs:text-4xl sm:mt-36 sm:max-w-3xl sm:text-6xl lg:text-7xl xl:mt-40 xl:max-w-[1100px] xl:text-8xl">
          Gallery Of My Projects
        </h1>
        <p className="z-30 mt-3 max-w-xs text-center font-Neue-Montreal-Bold text-xs tracking-3pct text-white sm:mt-10 sm:max-w-xl sm:text-xl xl:max-w-3xl xl:text-3xl">
          A versatile designer skilled in 2D design, 3D modeling, motion graphics, and Blender. With
          a strong creative vision a
          <span className="text-secondery">
            Their art is a fusion of beauty, motion, and storytelling.
          </span>
        </p>
        <h1
          className="z-30 mt-6 flex animate-shine items-center gap-2 bg-clip-text font-Neue-Montreal-Medium text-xs sm:text-base"
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
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="relative aspect-auto max-h-[700px] overflow-hidden rounded-xl shadow [break-inside:avoid] sm:max-h-max"
                >
                  <Skeleton className="mb-4 block h-[500px] w-full" />
                </div>
              ))
            : projects.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-auto max-h-[700px] overflow-hidden rounded-xl shadow [break-inside:avoid] sm:max-h-max"
                >
                  <img
                    src={require(`../assets/images/${item.preview_url}`)}
                    alt={item.title}
                    className="block h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  <button className="absolute bottom-4 left-4 flex h-[35px] items-center justify-center gap-1.5 font-Neue-Montreal-Regular text-sm text-white [text-shadow:_0_1px_10px_#000] xl:h-[46px] xl:text-base">
                    <GlassElement
                      width={100}
                      height={100}
                      radius={38}
                      depth={10}
                      blur={3}
                      center="flex"
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

export default memo(AllProjects);
