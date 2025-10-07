import { useState, useRef, useEffect } from 'react';
import dotsImg from '../assets/images/icons/dots.svg';
import { GlassElement } from './GlassElement/GlassElement';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import close from '../assets/images/icons/close.svg';
import open from '../assets/images/icons/open.svg';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Header() {
  gsap.registerPlugin(SplitText);

  const [subMenu, setSubMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const iconRef = useRef(null);
  const splitRef = useRef(null);
  const mm = gsap.matchMedia();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
        duration: 0.5,
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'expo.out',
      });
    });
  };

  const handlePointerLeave = (e) => {
    mm.add(
      {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1280px)',
      },
      (context) => {
        let { md, lg } = context.conditions;
        gsap.to(iconRef.current, {
          rotate: 0,
          duration: 0.4,
        });

        gsap.to(e.currentTarget, {
          height: md ? 50 : 40, // back to original height
          width: lg ? 110 : 90,
          top: 0,
          right: 0,
          zIndex: 30,
          ease: 'power3.out',
          duration: 0.4,
        });
      }
    );

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
    <>
      <div className="relative z-50 block md:hidden">
        <button
          className="mr-4 pt-6 flex items-center justify-center gap-1 place-self-end font-Neue-Montreal-Bold text-base tracking-3pct text-white"
          onClick={() => setIsOpen(true)}
        >
          Menu <img src={open} alt="open menu" />
        </button>

        <div
          className={`fixed right-0 top-0 z-50 flex h-full w-full transform flex-col bg-black px-6 py-4 text-white transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="relative flex h-10 items-center justify-between">
            <button
              className="absolute right-0 flex items-center justify-center gap-1 font-Neue-Montreal-Bold tracking-3pct"
              onClick={() => setIsOpen(false)}
            >
              Close
              <img src={close} alt="close" className="mt-1 w-5" />
            </button>
            <div
              className="glassBtn absolute left-0 h-[40px] w-[90px] cursor-pointer rounded-3xl py-[9px] font-Neue-Montreal-Bold text-sm tracking-wide text-white backdrop-blur-[42px] md:h-[50px] md:py-[14px] lg:w-[111px] lg:py-[12px] lg:text-base xl:mr-6"
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
            >
              <div className="flex items-center justify-between px-3.5 lg:px-4">
                English
                <img src={dotsImg} alt="dots" ref={iconRef} className="w-[4px] lg:w-[5px]" />
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
          </div>
          <div className="mt-20 flex flex-col gap-1">
            <div className="flex gap-2">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-Neue-Montreal-Bold text-5xl uppercase tracking-3pct xs:text-6xl sm:text-7xl"
              >
                home
              </a>
              <h3 className="font-Neue-Montreal-Bold text-xl tracking-3pct text-[#373737]">01</h3>
            </div>
            <div className="flex gap-2">
              <a
                href="#aboutus"
                onClick={() => setIsOpen(false)}
                className="font-Neue-Montreal-Bold text-5xl uppercase tracking-3pct xs:text-6xl sm:text-7xl"
              >
                about us
              </a>
              <h3 className="font-Neue-Montreal-Bold text-xl tracking-3pct text-[#373737]">02</h3>
            </div>
            <div className="flex gap-2">
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="font-Neue-Montreal-Bold text-5xl uppercase tracking-3pct xs:text-6xl sm:text-7xl"
              >
                projects
              </a>
              <h3 className="font-Neue-Montreal-Bold text-xl tracking-3pct text-[#373737]">03</h3>
            </div>
            <div className="flex gap-2">
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="font-Neue-Montreal-Bold text-5xl uppercase tracking-3pct xs:text-6xl sm:text-7xl"
              >
                shop
              </Link>
              <h3 className="font-Neue-Montreal-Bold text-xl tracking-3pct text-[#373737]">04</h3>
            </div>
            <div className="flex gap-2">
              <a
                onClick={() => setIsOpen(false)}
                href="#contactus"
                className="font-Neue-Montreal-Bold text-5xl uppercase tracking-3pct xs:text-6xl sm:text-7xl"
              >
                contact
              </a>
              <h3 className="font-Neue-Montreal-Bold text-xl tracking-3pct text-[#373737]">05</h3>
            </div>
          </div>
          <div className="mt-auto">
            <h1 className="font-Neue-Montreal-Bold text-xl tracking-3pct text-[#E31114]">
              Socials
            </h1>
            <div className="flex items-center gap-3">
              <Link to="" className="font-Neue-Montreal-Bold tracking-3pct text-white">
                Artstation
              </Link>
              <Link to="" className="font-Neue-Montreal-Bold tracking-3pct text-white">
                Instagram
              </Link>
              <Link to="" className="font-Neue-Montreal-Bold tracking-3pct text-white">
                Linkedin
              </Link>
            </div>
          </div>
        </div>
      </div>
      <header className="relative z-30 hidden items-center justify-center md:flex">
        <div className="absolute left-0 ml-4 mt-10 md:mt-5 xl:ml-6">
          <h1 className="w-[111px] text-white">LOGO</h1>
        </div>
        <nav className="relative mt-10 h-[50px] items-center rounded-full md:mt-5">
          <GlassElement
            width={100}
            height={100}
            radius={50}
            blur={2}
            depth={10}
            chromaticAberration={2}
          >
            <div className="relative flex h-full w-full items-center">
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
            </div>
          </GlassElement>
        </nav>

        <div
          className="glassBtn absolute right-0 mr-4 mt-10 hidden h-[50px] w-[90px] cursor-pointer overflow-hidden rounded-3xl py-[9px] font-Neue-Montreal-Bold text-sm tracking-wide text-white backdrop-blur-[42px] sm:block md:mt-5 md:h-[50px] md:py-[14px] lg:w-[111px] lg:py-[12px] lg:text-base xl:mr-6"
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <div className="flex items-center justify-between px-3.5 lg:px-4">
            English
            <img src={dotsImg} alt="dots" ref={iconRef} className="w-[4px] lg:w-[5px]" />
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
    </>
  );
}
