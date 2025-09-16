import arrowRight from '../assets/images/icons/right-arrow.svg';
import { GlassElement } from './GlassElement/GlassElement';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center" id="contactus">
      <footer className="z-10 flex w-full max-w-[1500px] flex-wrap items-center justify-center xs:justify-between gap-y-10 py-16 sm:py-20 sm:flex-nowrap sm:gap-y-0">
        <div className="text-center w-[200px]">
          <h1 className="font-Neue-Montreal-Bold text-xl text-white xl:text-2xl">FAQ</h1>
          <div className="mt-2 flex flex-col text-sm xl:text-base">
            <Link to="/" className="font-Neue-Montreal-Regular text-secondery">
              Company
            </Link>
            <Link to="/" className="font-Neue-Montreal-Regular text-secondery">
              Employment
            </Link>
            <Link to="/" className="font-Neue-Montreal-Regular text-secondery">
              Order History
            </Link>
            <Link to="/" className="font-Neue-Montreal-Regular text-secondery">
              Terms & Services
            </Link>
          </div>
        </div>
        <div className="-order-1 flex-1 text-center sm:-order-none sm:flex-none sm:px-10">
          <h1 className="mt-2 font-Neue-Montreal-Bold text-xl text-white xl:text-2xl">
            BOOK A TIME!
          </h1>
          <div className="mt-2 flex flex-col items-center justify-between gap-5">
            <input
              type="email"
              className="glassCard h-[40px] w-[290px] rounded-3xl p-3 font-Neue-Montreal-Bold text-white sm:w-[320px]"
            />
            <Link
              to="/"
              className="flex h-[42px] w-[101px] items-center gap-1.5 font-Neue-Montreal-Medium text-sm text-white"
            >
              <GlassElement
                width={100}
                height={100}
                radius={100}
                depth={10}
                blur={3}
                center={'flex'}
                chromaticAberration={4}
              >
                Send <img src={arrowRight} alt="arrow right" className="ml-1.5 w-3.5" />
              </GlassElement>
            </Link>
          </div>
        </div>
        <div className="w-[200px]">
          <h1 className="text-center font-Neue-Montreal-Bold text-xl text-white xl:text-2xl">
            CONTACT US
          </h1>
          <div className="mt-2 flex flex-col items-center text-center">
            <p className="font-Neue-Montreal-Regular text-sm text-secondery xl:text-base">
              09129212525
            </p>
            <p className="max-w-[200px] font-Neue-Montreal-Regular text-sm text-secondery xl:text-base">
              3785 Blackwell Street City Cordova State Province
            </p>
            {/* <div className='flex justify-center gap-2 mt-3'> <a href='#' className='rounded-full flex items-center justify-center'> <GlassElement width={44} height={44} radius={100} depth={10} blur={3} center={'flex'} chromaticAberration={5} > <img src="" alt="" className='' /> </GlassElement> </a> <a href='#' className='rounded-full flex items-center justify-center'> <GlassElement width={44} height={44} radius={100} depth={10} blur={3} center={'flex'} chromaticAberration={5} > <img src="" alt="" className='' /> </GlassElement> </a> <a href='#' className='rounded-full flex items-center justify-center'> <GlassElement width={44} height={44} radius={100} depth={10} blur={3} center={'flex'} chromaticAberration={5} > <img src="" alt="" className='' /> </GlassElement> </a> <a href='#' className='rounded-full flex items-center justify-center'> <GlassElement width={44} height={44} radius={100} depth={10} blur={3} center={'flex'} chromaticAberration={5} > <img src="" alt="" className='' /> </GlassElement> </a> </div> */}
          </div>
        </div>
      </footer>
      <h1
        className="absolute bottom-28 xs:bottom-36 left-0 z-0 w-full text-center font-Neue-Montreal-Bold leading-3 text-white md:bottom-28 lg:bottom-40 xl:bottom-44"
        style={{ fontSize: '15vw' }}
      >
        ZIRO DESIGN
      </h1>
      <div className="relative z-10 flex w-full flex-col justify-between bg-black sm:px-10 px-5 py-5 sm:py-8 tracking-3pct sm:flex-row sm:items-center xl:py-10">
        <h1 className="sm:pr-2 font-Neue-Montreal-Bold text-[5vw] text-white sm:text-[4vw]">
          BOOK A TIME FOR YOUR WORK
        </h1>
        <p className="max-w-[240px] font-Neue-Montreal-Regular text-xs tracking-3pct text-secondery lg:max-w-[300px] lg:text-sm xl:max-w-sm xl:text-base">
          The opportunity to work with us is open — just drop your work email to take the first step
          toward joining a creative and passionate team.
        </p>
      </div>
    </div>
  );
}
