import { useState, useRef } from 'react';
import dotsImg from '../assets/images/icons/dots.svg';
import { GlassElement } from './GlassElement/GlassElement';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { Link } from 'react-router';

export default function Header() {
  gsap.registerPlugin(SplitText);

  const [subMenu, setSubMenu] = useState(false);
  const iconRef = useRef(null);

  const handlePointerEnter = (e) => {
    setSubMenu(true);
    gsap.to(iconRef.current, {
      rotate: 90,
      duration: 0.4,
    });

    gsap.to(e.currentTarget, {
      height: 145, // expand only downward
      width: 170,
      top: 5,
      right: 0,
      zIndex: 30,
      ease: 'power3.out',
      duration: 0.4,
    });

    document.fonts.ready.then(() => {
      gsap.set('.languageText', { opacity: 1 });

      let split;
      SplitText.create('.languageText', {
        type: 'words,lines',
        linesClass: 'line',
        autoSplit: true,
        mask: 'lines',
        onSplit: (self) => {
          split = gsap.from(self.lines, {
            duration: 0.7,
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            ease: 'expo.out',
          });
          return split;
        },
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
      top: 5,
      right: 0,
      zIndex: 30,
      ease: 'power3.out',
      duration: 0.4,
    });
    setSubMenu(false);
  };

  return (
    <header className="font-Greycliff-CF-bold relative z-30 mt-10 flex items-center justify-center lg:mt-5">
      <div className="absolute left-0 ml-4 xl:ml-6">
        <h1 className="w-[111px] text-white">LOGO</h1>
      </div>
      <nav className="hidden h-[50px] w-[410px] items-center justify-center rounded-full lg:flex">
        <GlassElement
          width={100}
          height={100}
          radius={50}
          blur={2}
          center={'flex'}
          chromaticAberration={2}
        >
          <ul className="flex items-center justify-center gap-3">
            <a href="/" className="cursor-pointer font-Neue-Montreal-Regular text-sm text-white">
              HOME<span className="text-primary">.</span>
            </a>
            <a
              href="#aboutus"
              className="cursor-pointer font-Neue-Montreal-Regular text-sm text-secondery"
            >
              ABOUT US<span className="text-secondery">.</span>
            </a>
            <a
              href="#projects"
              className="cursor-pointer font-Neue-Montreal-Regular text-sm text-secondery"
            >
              PROJECTS<span className="text-secondery">.</span>
            </a>
            <Link
              to="/shop"
              className="cursor-pointer font-Neue-Montreal-Regular text-sm text-secondery"
            >
              SHOP<span className="text-secondery">.</span>
            </Link>
            <a
              href="#contactus"
              className="cursor-pointer font-Neue-Montreal-Regular text-sm text-secondery"
            >
              CONTACT US<span className="text-secondery">.</span>
            </a>
          </ul>
        </GlassElement>
      </nav>
      <div
        className="glassBtn absolute hidden lg:block right-0 mr-4 h-[50px] w-[111px] cursor-pointer overflow-hidden rounded-3xl py-[12px] font-Neue-Montreal-Bold tracking-wide text-white backdrop-blur-[42px] xl:mr-6"
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
