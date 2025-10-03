import { useState, useRef, useEffect } from 'react';
import dotsImg from '../assets/images/icons/dots.svg';
import { GlassElement } from './GlassElement/GlassElement';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  gsap.registerPlugin(SplitText);

  const [subMenu, setSubMenu] = useState(false);
  const iconRef = useRef(null);
  const splitRef = useRef(null);

  const handlePointerEnter = (e) => {
    setSubMenu(true);

    gsap.to(iconRef.current, {
      rotate: 90,
      duration: 0.4,
    });

    gsap.to(e.currentTarget, {
      height: 145, // expand only downward
      width: 170,
      top: 0,
      right: 0,
      zIndex: 30,
      ease: 'power3.out',
      duration: 0.4,
    });

    document.fonts.ready.then(() => {
      gsap.set('.languageText', { opacity: 1 });

      if (!splitRef.current) {
        splitRef.current = new SplitText('.languageText', {
          type: 'words,lines',
          linesClass: 'line',
        });
      }

      gsap.set(splitRef.current.lines, { yPercent: 100, opacity: 0 });

      gsap.to(splitRef.current.lines, {
        duration: 0.7,
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'expo.out',
      });
    });
  };

  const handlePointerLeave = (e) => {
    gsap.to(iconRef.current, {
      rotate: 0,
      duration: 0.4,
    });

    gsap.to(e.currentTarget, {
      height: 50, // back to original height
      width: 110,
      top: 0,
      right: 0,
      zIndex: 30,
      ease: 'power3.out',
      duration: 0.4,
    });

    setSubMenu(false);
  };

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About us', to: '/#aboutus' },
    { name: 'projects', to: '/#projects' },
    { name: 'shop', to: '/shop' },
    { name: 'Contact Us', to: '/#contactus' },
  ];
  const [active, setActive] = useState(0);
  const indicatorRef = useRef(null);
  const linksRef = useRef([]);

  const indicatorX = useRef(null);
  const indicatorW = useRef(null);

  useEffect(() => {
    indicatorX.current = gsap.quickTo(indicatorRef.current, 'x', {
      duration: 0.3,
      ease: 'power3.out',
    });
    indicatorW.current = gsap.quickTo(indicatorRef.current, 'width', {
      duration: 0.3,
      ease: 'power3.out',
    });

    moveIndicator(active);
  });

  const moveIndicator = (index) => {
    const link = linksRef.current[index];
    if (link && indicatorX.current && indicatorW.current) {
      const linkRect = link.getBoundingClientRect();
      const parentRect = link.parentElement.getBoundingClientRect();
      const x = linkRect.left - parentRect.left;
      const width = linkRect.width;

      indicatorX.current(x);
      indicatorW.current(width);
    }
  };

  return (
    <header className="relative z-30 mt-10 flex items-center justify-center lg:mt-5">
      <div className="absolute left-0 ml-4 xl:ml-6">
        <h1 className="w-[111px] text-white">LOGO</h1>
      </div>
      <nav className="relative hidden h-[50px] items-center rounded-full lg:flex">
        <GlassElement
          width={100}
          height={100}
          radius={50}
          blur={2}
          depth={10}
          chromaticAberration={2}
        >
          <ul className="relative flex h-full w-full items-center">
            {/* Indicator */}
            <div
              ref={indicatorRef}
              className="pointer-events-none absolute left-0 top-[0px] flex h-[50px] w-[100px] items-center justify-center rounded-3xl text-xs text-white sm:text-sm xl:text-base"
              style={{ transform: 'translateX(0px)' }}
            >
              <GlassElement
                width={100}
                height={100}
                radius={50}
                depth={15}
                blur={2}
                center="flex"
                chromaticAberration={3}
              />
            </div>

            {navLinks.map((link, i) => (
              <HashLink
                smooth
                key={i}
                to={link.to}
                ref={(el) => (linksRef.current[i] = el)}
                onClick={() => setActive(i)}
                onMouseEnter={() => moveIndicator(i)}
                onMouseLeave={() => moveIndicator(active)}
                className="flex h-[50px] cursor-pointer items-center justify-center px-5 font-Neue-Montreal-Regular text-sm uppercase text-white"
              >
                {link.name}
              </HashLink>
            ))}
          </ul>
        </GlassElement>
      </nav>

      <div
        className="glassBtn absolute right-0 mr-4 hidden h-[50px] w-[111px] cursor-pointer overflow-hidden rounded-3xl py-[12px] font-Neue-Montreal-Bold tracking-wide text-white backdrop-blur-[42px] lg:block xl:mr-6"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <div className="flex items-center justify-between px-4">
          English
          <img src={dotsImg} alt="dots" ref={iconRef} />
        </div>
        {/* Sub Menu */}
        <div className={`relative w-full px-2 ${!subMenu ? 'hidden' : 'block'}`}>
          <div className="mt-5 flex w-full flex-col">
            <a href="/" className="languageText rounded-xl px-3 py-2 hover:bg-[#796c6563]">
              <span>Persian</span>
            </a>
            <a href="/" className="languageText rounded-xl px-3 py-2 hover:bg-[#796c6563]">
              <span>Arabic</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
