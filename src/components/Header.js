import { useState, useRef } from 'react';
import dotsImg from '../assets/images/dots.png';
import { GlassElement } from './GlassElement/GlassElement';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

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
            duration: 1,
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
    <header className="font-Greycliff-CF-bold relative z-30 mt-5 flex items-center justify-center">
      <div className="absolute left-0 ml-14">
        <h1 className="w-[111px] text-white">LOGO</h1>
      </div>
      <GlassElement
        width={460}
        height={57}
        radius={50}
        depth={10}
        blur={3}
        center={'flex'}
        chromaticAberration={5}
      >
        <nav className="flex items-center justify-center rounded-full">
          <ul className="flex items-center justify-center gap-3">
            <a href="/" className="cursor-pointer font-Neue-Montreal-Regular text-base text-white">
              HOME<span className="text-primary">.</span>
            </a>
            <a
              href="/"
              className="cursor-pointer font-Neue-Montreal-Regular text-base text-secondery"
            >
              ABOUT US<span className="text-secondery">.</span>
            </a>
            <a
              href="/"
              className="cursor-pointer font-Neue-Montreal-Regular text-base text-secondery"
            >
              PROJECTS<span className="text-secondery">.</span>
            </a>
            <a
              href="/"
              className="cursor-pointer font-Neue-Montreal-Regular text-base text-secondery"
            >
              SHOP<span className="text-secondery">.</span>
            </a>
            <a
              href="/"
              className="cursor-pointer font-Neue-Montreal-Regular text-base text-secondery"
            >
              CONTACT US<span className="text-secondery">.</span>
            </a>
          </ul>
        </nav>
      </GlassElement>
      <div
        className="glassBtn absolute right-0 mr-14 h-[50px] w-[110px] cursor-pointer overflow-hidden rounded-3xl py-[12px] font-Neue-Montreal-Bold tracking-wide text-white backdrop-blur-[42px]"
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
              <span>Persion</span>
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
