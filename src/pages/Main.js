import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './Home';
import AboutUs from './AboutUs';
import Projects from './Projects';
import ProductsPreview from './ProductsPreview';

export default function Main() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
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
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <main>
      <Home />
      <section ref={(el) => (sectionsRef.current[1] = el)}>
        <AboutUs />
      </section>
      <section ref={(el) => (sectionsRef.current[2] = el)}>
        <Projects />
      </section>
      <section ref={(el) => (sectionsRef.current[3] = el)}>
        <ProductsPreview />
      </section>
    </main>
  );
}
