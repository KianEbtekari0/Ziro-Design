import { useRef, useEffect } from 'react'
import company1 from '../assets/images/company2.png'
import company2 from '../assets/images/company3.png'
import company3 from '../assets/images/company4.png'
import company4 from '../assets/images/company5.png'
import company5 from '../assets/images/company7.png'
import company6 from '../assets/images/company8.png'
import star1 from '../assets/images/star1.png'
import star2 from '../assets/images/star2.png'
import arrowIcon from '../assets/images/arrow-right.png'
import copyIcon from '../assets/images/tabler_copy.png'
import boxIcon from '../assets/images/boxIcon.png'
import gsap from 'gsap'

export default function AboutUs() {
  return (
    <div className="container bg-black pb-16">
      {/* <div className="overflow-hidden px-8 whitespace-nowrap relative">
        {' '}

        <div
          className="logoAnimation flex"
          style={{ gap: '80px', willChange: 'transform' }}
        >
          {' '}
          <img src={company1} alt={'company-1'} draggable={false} />{' '}
          <img src={company2} alt={'company-1'} draggable={false} />{' '}
          <img src={company3} alt={'company-1'} draggable={false} />{' '}
          <img src={company4} alt={'company-1'} draggable={false} />{' '}
          <img src={company5} alt={'company-1'} draggable={false} />{' '}
          <img src={company1} alt={'company-1'} draggable={false} />{' '}
          <img src={company2} alt={'company-1'} draggable={false} />{' '}
          <img src={company3} alt={'company-1'} draggable={false} />{' '}
          <img src={company4} alt={'company-1'} draggable={false} />{' '}
          <img src={company5} alt={'company-1'} draggable={false} />{' '}
        </div>{' '}

      </div> */}
      <div className="flex overflow-hidden px-8 whitespace-nowrap relative">
        <div className="bg-gradient-to-l z-10 from-black from-50% to-transparent absolute right-0 top-0 w-32 h-full"></div> 
        <img src={star1} alt="star1" className="z-30 absolute left-0" />
        
        <div>
            <div className="inline-flex logoAnimation">
                <img src={company1} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company2} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company3} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company4} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company5} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company1} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company2} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company3} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company4} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company5} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
            </div>
            <div className="inline-flex logoAnimation">
                <img src={company1} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company2} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company3} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company4} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company5} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company1} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company2} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company3} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company4} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company5} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
            </div>
            <div className="inline-flex logoAnimation">
                <img src={company1} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company2} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company3} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company4} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company5} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company1} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company2} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company3} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company4} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company5} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
            </div>
        </div>
        
        <img src={star2} alt="star2" className="z-30 absolute right-0" />
        <div className="bg-gradient-to-r from-black from-50% to-transparent absolute left-0 top-0 w-32 h-full"></div>
      </div>
      <div>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-Neue-Montreal-Bold mt-10">
          SAFARPOOR – 3D & VIDEO CREATOR CONVERGE
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-16">
        <div className="glassCard flex items-center justify-between rounded-3xl px-16">
          <div className="glassCard flex items-center p-6 justify-center rounded-full">
            <img src={boxIcon} alt="box icon" className="w-14" />
          </div>
          <div>
            <h1 className="font-Neue-Montreal-Bold text-5xl text-white">
              312k
            </h1>
            <p className="mt-3 text-secondery font-Neue-Montreal-Regular">
              3D object on 3D design platform{' '}
            </p>
            <a
              href="#"
              className="flex items-center mt-3 font-Manrope-Medium gap-3 text-primary"
            >
              <div
                href="#"
                className="flex items-center justify-center bg-primary text-white rounded-full"
              >
                <img src={arrowIcon} alt="arrow icon" className="w-6" />
              </div>
              GO TO MY PROFILE
            </a>
          </div>
        </div>
        <div className="flex items-center flex-col gap-4">
          <div className="glassCard w-full flex items-center justify-between rounded-3xl px-8 py-6">
            <div className="glassCard flex items-center p-5 justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[40px] text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-Neue-Montreal-Bold text-white text-5xl">
                472k
              </h1>
              <p className="mt-3 text-secondery font-Neue-Montreal-Regular">
                People views on this product
              </p>
            </div>
          </div>
          <div className="glassCard flex items-center justify-between rounded-3xl px-8 py-4">
            <div>
              <p className="text-secondery font-Neue-Montreal-Regular">
                Sketchfab, Vectary, and Spline let you upload and view 3D models
                in the browser — great for show casing or creative use.
              </p>
            </div>
          </div>
        </div>
        <div className="glassCard flex flex-col items-center text-center justify-center gap-8 rounded-3xl px-16 ">
          <h1 className="font-Neue-Montreal-Bold text-white text-4xl">
            Do you want to Start a project together
          </h1>
          <button className="glassBtn flex items-center justify-center font-Neue-Montreal-Regular gap-2 py-2.5 px-5 text-[#BFBFBF] rounded-3xl">
            <img src={copyIcon} alt="copy image" />
            Copy my email address
          </button>
        </div>
      </div>
      <div className="mt-16">
        <p className="bg-[#1A1A1A] text-white text-sm font-Neue-Montreal-Bold py-1 px-2 rounded-md inline-block">
          AVAILABLE FOR YOUR PROJECT
        </p>
        <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-Neue-Montreal-Bold mt-1">
          A versatile designer skilled in 2D design, 3D modeling, motion
          graphics, and Blender. With a strong creative vision and mastery of
          design principles, they bring unique characters and captivating visual
          stories to life. From character design to animation, their creative
          journey is driven by innovation and quality.{' '}
          <span className="text-white opacity-60">
            Combining professional tools with fresh ideas, they breathe life
            into every project. Their art is a fusion of beauty, motion, and
            storytelling.
          </span>
        </h1>
      </div>
    </div>
  )
}
