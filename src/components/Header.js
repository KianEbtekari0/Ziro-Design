import { useState } from 'react'
import dotsImg from '../assets/images/dots.png'
import { GlassElement } from './GlassElement/GlassElement'
import gsap from 'gsap'

export default function Header() {
  const [subMenu, setSubMenu] = useState(false)

  const handlePointerEnter = (e) => {
    setSubMenu(true)
    gsap.to(e.currentTarget, {
      height: 145, // expand only downward
      width: 170,
      top: 5,
      right: 0,
      zIndex: 30,
      ease: 'power1.out',
      duration: 0.5,
    })
  }

  const handlePointerLeave = (e) => {
    setSubMenu(false)
    gsap.to(e.currentTarget, {
      height: 50, // back to original height
      width: 110,
      top: 5,
      right: 0,
      zIndex: 30,
      ease: 'power1.out',
      duration: 0.5,
    })
  }

  return (
    <header className="flex items-center justify-center relative z-30 font-Greycliff-CF-bold mt-5">
      <div className="absolute left-0 ml-14">
        <h1 className="text-white w-[111px]">LOGO</h1>
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
          <ul className="flex items-center gap-3 justify-center">
            <a
              href="/"
              className="text-base font-Neue-Montreal-Regular cursor-pointer text-white"
            >
              HOME<span className="text-primary">.</span>
            </a>
            <a
              href="/"
              className="text-base font-Neue-Montreal-Regular cursor-pointer text-secondery"
            >
              ABOUT US<span className="text-secondery">.</span>
            </a>
            <a
              href="/"
              className="text-base font-Neue-Montreal-Regular cursor-pointer text-secondery"
            >
              PROJECTS<span className="text-secondery">.</span>
            </a>
            <a
              href="/"
              className="text-base font-Neue-Montreal-Regular cursor-pointer text-secondery"
            >
              SHOP<span className="text-secondery">.</span>
            </a>
            <a
              href="/"
              className="text-base font-Neue-Montreal-Regular cursor-pointer text-secondery"
            >
              CONTACT US<span className="text-secondery">.</span>
            </a>
          </ul>
        </nav>
      </GlassElement>
      <div
        className="glassBtn py-[12px] absolute right-0 mr-14 tracking-wide font-Neue-Montreal-Bold w-[110px] cursor-pointer h-[50px] backdrop-blur-[42px] text-white rounded-3xl overflow-hidden "
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <div className="flex px-5 gap-2 items-center justify-between">
          English
          <img src={dotsImg} alt="dots" />
        </div>
        {/* Sub Menu */}
        <div className={`relative px-2 w-full ${!subMenu ? 'hidden' : 'block'}`}>
          <div className="flex flex-col w-full mt-5">
            <a href="/" className="hover:bg-[#796c6563] px-3 py-2 rounded-xl">
              <span>Persion</span>
            </a>
            <a href="/" className="hover:bg-[#796c6563] px-3 py-2 rounded-xl">
              <span>Arabic</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
