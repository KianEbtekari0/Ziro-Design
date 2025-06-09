import React from 'react'

export default function Header() {
  return (
    <header className='flex relative z-30 items-center justify-between font-Greycliff-CF px-14 mt-5'>
      <div>
        <h1 className='text-white'>LOGO</h1>
      </div>
      <ul className='flex items-center gap-3 justify-center'>
        <a href="#" className='text-lg cursor-pointer text-white font-bold'>HOME <span className='text-primary'>.</span></a>
        <a href="#" className='text-lg cursor-pointer text-secondery font-bold'>PROJECTS.</a>
        <a href="#" className='text-lg cursor-pointer text-secondery font-bold'>ABOUT US.</a>
        <a href="#" className='text-lg cursor-pointer text-secondery font-bold'>CONTACT US.</a>
      </ul>
      <div>
        <button className='py-2 px-6 backdrop-blur-[42px] cursor-pointer text-white rounded-3xl'>English</button>
      </div>
    </header>
  )
}
