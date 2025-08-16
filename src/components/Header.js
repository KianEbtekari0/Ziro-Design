import dotsImg from '../assets/images/dots.png'

export default function Header() {
  return (
    <header className='flex items-center justify-between relative z-30 font-Greycliff-CF-bold px-14 mt-5'>
      <div>
        <h1 className='text-white w-[111px]'>LOGO</h1>
      </div>
      <nav className='flex items-center glassCard justify-center h-[57px] rounded-full w-[460px]'>
        <ul className='flex items-center gap-3 justify-center'>
          <a href="#" className='text-base font-Neue-Montreal-Regular cursor-pointer text-white'>HOME<span className='text-primary'>.</span></a>
          <a href="#" className='text-base font-Neue-Montreal-Regular cursor-pointer text-secondery'>ABOUT US<span className='text-secondery'>.</span></a>
          <a href="#" className='text-base font-Neue-Montreal-Regular cursor-pointer text-secondery'>PROJECTS<span className='text-secondery'>.</span></a>
          <a href="#" className='text-base font-Neue-Montreal-Regular cursor-pointer text-secondery'>SHOP<span className='text-secondery'>.</span></a>
          <a href="#" className='text-base font-Neue-Montreal-Regular cursor-pointer text-secondery'>CONTACT US<span className='text-secondery'>.</span></a>
        </ul>
        <div>
        </div>
      </nav>
      <button className='glassBtn flex items-center justify-center gap-2 tracking-wide font-Neue-Montreal-Bold py-2 px-6 backdrop-blur-[42px] cursor-pointer text-white rounded-3xl'>
        English
        <img src={dotsImg} alt="" />
      </button>
    </header>
  )
}
