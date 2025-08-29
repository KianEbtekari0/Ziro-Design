import company1 from '../assets/images/company2.png'
import company2 from '../assets/images/company3.png'
import company3 from '../assets/images/company4.png'
import company4 from '../assets/images/company5.png'
import company5 from '../assets/images/company7.png'
import star1 from '../assets/images/star1.png'
import star2 from '../assets/images/star2.png'

export default function AboutUs() {
  return (
    <div className="container bg-black pb-16">
      <div className="flex overflow-hidden px-8 whitespace-nowrap relative">
        <div className="bg-gradient-to-l z-10 from-black from-50% to-transparent absolute right-0 top-0 w-32 h-full"></div> 
        <img src={star1} alt="star1" className="z-30 absolute left-0" />
        
        <div>
            <div className="inline-flex logoAnimation">
                <img src={company1} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company2} alt={'company-2'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company3} alt={'company-3'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company4} alt={'company-4'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company5} alt={'company-5'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company1} alt={'company-1'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company2} alt={'company-2'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company3} alt={'company-3'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company4} alt={'company-4'} className='max-h-[50px] mx-10' draggable={false} />
                <img src={company5} alt={'company-5'} className='max-h-[50px] mx-10' draggable={false} />
            </div>
            <div className="inline-flex logoAnimation">
                <img src={company1} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company2} alt={'company-2'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company3} alt={'company-3'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company4} alt={'company-4'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company5} alt={'company-5'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company1} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company2} alt={'company-2'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company3} alt={'company-3'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company4} alt={'company-4'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company5} alt={'company-5'} className='max-h-[50px] block mx-10' draggable={false} />
            </div>
            <div className="inline-flex logoAnimation">
                <img src={company1} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company2} alt={'company-2'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company3} alt={'company-3'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company4} alt={'company-4'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company5} alt={'company-5'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company1} alt={'company-1'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company2} alt={'company-2'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company3} alt={'company-3'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company4} alt={'company-4'} className='max-h-[50px] block mx-10' draggable={false} />
                <img src={company5} alt={'company-5'} className='max-h-[50px] block mx-10' draggable={false} />
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
