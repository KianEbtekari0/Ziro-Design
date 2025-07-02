import React from 'react'
import company2 from '../assets/images/company2.png';
import company3 from '../assets/images/company3.png';
import company4 from '../assets/images/company4.png';
import company5 from '../assets/images/company5.png';
import company7 from '../assets/images/company7.png';
import company8 from '../assets/images/company8.png';
import star1 from '../assets/images/star1.png';
import star2 from '../assets/images/star2.png';
import arrowIcon from '../assets/images/arrow-right.png';

export default function AboutUs() {
  return (
    <div className='container bg-black py-16'>
        <div className='flex items-center justify-center gap-20'>
            <img src={star1} alt="star1" />
            <div className='flex items-center justify-between w-full'>
                <img src={company2} alt="company image" />
                <img src={company3} alt="company image" />
                <img src={company4} alt="company image" />
                <img src={company5} alt="company image" />
                <img src={company7} alt="company image" />
                <img src={company8} alt="company image" />
            </div>
            <img src={star2} alt="star2" />
        </div>
        <div>
            <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-Neue-Montreal-Bold mt-10'>SAFARPOOR – 3D & VIDEO CREATOR CONVERGE</h1>
        </div>
        <div className='grid grid-cols-3 gap-5 mt-16'>
            <div className='flex items-center justify-between rounded-3xl bg-white px-16 py-12'>
                <div className='flex items-center p-5 justify-center bg-black rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[60px] text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>
                </div>
                <div>
                    <h1 className='font-Neue-Montreal-Bold text-5xl'>312k</h1>
                    <p className='mt-3 text-secondery font-Neue-Montreal-Regular'>3D object on 3D design platform </p>
                    <a href="#" className='flex items-center mt-3 font-Manrope-Medium gap-3 text-primary'>
                        <div href="#" className='flex items-center justify-center bg-primary text-white rounded-full'>
                            <img src={arrowIcon} alt="arrow icon" className='w-6' />
                        </div>
                        GO TO MY PROFILE
                    </a>
                </div>
            </div>
            <div className='space-y-4'>
                <div className='flex items-center justify-between rounded-3xl bg-white px-8 py-6'>
                    <div className='flex items-center p-5 justify-center bg-black rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[40px] text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className='font-Neue-Montreal-Bold text-5xl'>472k</h1>
                        <p className='mt-3 text-secondery font-Neue-Montreal-Regular'>People views on this product</p>
                    </div>
                </div>
                <div className='flex items-center justify-between rounded-3xl bg-white px-8 py-4'>
                    <div>
                        <p className='mt-3 text-secondery font-Neue-Montreal-Regular'>Sketchfab, Vectary, and Spline let you upload and view 3D models in the browser — great for show casing or creative use.</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between rounded-3xl bg-white px-16 py-12'>
                <div className='flex items-center p-5 justify-center bg-black rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[60px] text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>
                </div>
                <div>
                    <h1 className='font-Neue-Montreal-Bold text-5xl'>312k</h1>
                    <p className='mt-3 text-secondery font-Neue-Montreal-Regular'>3D object on 3D design platform </p>
                    <a href="#" className='flex items-center mt-3 font-Manrope-Medium gap-3 text-primary'>
                        <div href="#" className='flex items-center justify-center bg-primary text-white rounded-full'>
                            <img src={arrowIcon} alt="arrow icon" className='w-6' />
                        </div>
                        GO TO MY PROFILE
                    </a>
                </div>
            </div>
        </div>
        <div className='mt-16'>
            <p className='bg-primary text-white text-sm font-Neue-Montreal-Bold p-0.5 rounded-sm inline-block'>AVAILABLE FOR YOUR PROJECT</p>
            <h1 className='text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-Neue-Montreal-Bold mt-1'>A versatile designer skilled in 2D design, 3D modeling, motion graphics, and Blender. With a strong creative vision and mastery of design principles, they bring unique characters and captivating visual stories to life. From character design to animation, their creative journey is driven by innovation and quality. <span className='text-white opacity-60'>Combining professional tools with fresh ideas, they breathe life into every project. Their art is a fusion of beauty, motion, and storytelling.</span></h1>
        </div>
    </div>
  )
}
