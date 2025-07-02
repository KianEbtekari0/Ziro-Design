import React from 'react'
import dotsImg from '../assets/images/dots.png'

export default function Header() {
  return (
    <header className='absolute top-0 left-0 w-full flex items-center justify-between z-30 font-Greycliff-CF-bold px-14 mt-5'>
      <div>
        <h1 className='text-white'>LOGO</h1>
      </div>
      <ul className='flex items-center gap-3 justify-center'>
        <a href="#" className='text-base font-Neue-Montreal-Regular cursor-pointer text-white'>HOME<span className='text-primary'>.</span></a>
        <a href="#" className='text-base font-Neue-Montreal-Regular cursor-pointer text-secondery'>PROJECTS<span className='text-secondery'>.</span></a>
        <a href="#" className='text-base font-Neue-Montreal-Regular cursor-pointer text-secondery'>ABOUT US<span className='text-secondery'>.</span></a>
        <a href="#" className='text-base font-Neue-Montreal-Regular cursor-pointer text-secondery'>CONTACT US<span className='text-secondery'>.</span></a>
      </ul>
      <div>
        <button className='flex items-center justify-center gap-2 tracking-wide font-Neue-Montreal-Bold py-2 px-6 backdrop-blur-[42px] cursor-pointer text-white rounded-3xl'>
          English
          <img src={dotsImg} alt="" />
        </button>
      </div>
    </header>
  )
}
