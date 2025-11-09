import { useEffect, useRef, lazy, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = lazy(() => import('./Home'));
const AboutUs = lazy(() => import('./AboutUs'));
const Projects = lazy(() => import('./Projects'));
const ProductsPreview = lazy(() => import('./ProductsPreview'));

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) return;

    sectionsRef.current.forEach((section, index) => {
      if (!section || index === 0) return;

      gsap.fromTo(
        section,
        { opacity: 0, y: 70, scale: 0.99 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <main>
      <section ref={(el) => (sectionsRef.current[0] = el)}>
        <Suspense fallback={<div className="min-h-screen bg-black"></div>}>
          <Home />
        </Suspense>
      </section>

      <section ref={(el) => (sectionsRef.current[1] = el)}>
        <Suspense fallback={<div className="h-[400px] bg-neutral-900" />}>
          <AboutUs />
        </Suspense>
      </section>

      <section ref={(el) => (sectionsRef.current[2] = el)}>
        <Suspense fallback={<div className="h-[400px] bg-neutral-900" />}>
          <Projects />
        </Suspense>
      </section>

      <section ref={(el) => (sectionsRef.current[3] = el)}>
        <Suspense fallback={<div className="h-[400px] bg-neutral-900" />}>
          <ProductsPreview />
        </Suspense>
      </section>
    </main>
  );
}
