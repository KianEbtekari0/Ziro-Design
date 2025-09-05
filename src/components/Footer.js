import arrowRight from '../assets/images/arrow-right.png';
import { GlassElement } from './GlassElement/GlassElement';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <footer className="z-0 flex w-full max-w-7xl items-center justify-center px-10 py-20">
        <div className="absolute left-0 pl-10 text-center">
          <h1 className="font-Neue-Montreal-Bold text-2xl text-white">FAQ</h1>
          <div className="mt-2 flex flex-col">
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
        <div className="text-center">
          <h1 className="mt-2 font-Neue-Montreal-Bold text-2xl text-white">BOOK A TIME!</h1>
          <div className="mt-2 flex flex-col items-center justify-between gap-5">
            <input
              type="email"
              className="glassCard h-[40px] w-[320px] rounded-3xl p-3 font-Neue-Montreal-Bold text-white"
            />
            <Link
              to="/"
              className="flex items-center gap-1.5 font-Neue-Montreal-Medium text-sm text-white"
            >
              <GlassElement
                width={100}
                height={40}
                radius={100}
                depth={10}
                blur={3}
                center={'flex'}
                chromaticAberration={5}
              >
                Send
                <img src={arrowRight} alt="arrow right" />
              </GlassElement>
            </Link>
          </div>
        </div>
        <div className="absolute right-0 pr-7">
          <h1 className="font-Neue-Montreal-Bold text-2xl text-white">CONTACT US INFORMATION</h1>
          <div className="mt-2 flex flex-col items-center text-center">
            <p className="font-Neue-Montreal-Regular text-secondery">09129212525</p>
            <p className="max-w-[200px] font-Neue-Montreal-Regular text-secondery">
              3785 Blackwell Street City Cordova State Province
            </p>
            {/* <div className='flex justify-center gap-2 mt-3'>
                        <a href='#' className='rounded-full flex items-center justify-center'>
                            <GlassElement
                                width={44}
                                height={44}
                                radius={100}
                                depth={10}
                                blur={3}
                                center={'flex'}
                                chromaticAberration={5}
                            >
                                <img src="" alt="" className='' />
                            </GlassElement>
                        </a>
                        <a href='#' className='rounded-full flex items-center justify-center'>
                            <GlassElement
                                width={44}
                                height={44}
                                radius={100}
                                depth={10}
                                blur={3}
                                center={'flex'}
                                chromaticAberration={5}
                            >
                                <img src="" alt="" className='' />
                            </GlassElement>
                        </a>
                        <a href='#' className='rounded-full flex items-center justify-center'>
                            <GlassElement
                                width={44}
                                height={44}
                                radius={100}
                                depth={10}
                                blur={3}
                                center={'flex'}
                                chromaticAberration={5}
                            >
                                <img src="" alt="" className='' />
                            </GlassElement>
                        </a>
                        <a href='#' className='rounded-full flex items-center justify-center'>
                            <GlassElement
                                width={44}
                                height={44}
                                radius={100}
                                depth={10}
                                blur={3}
                                center={'flex'}
                                chromaticAberration={5}
                            >
                                <img src="" alt="" className='' />
                            </GlassElement>
                        </a>
                    </div> */}
          </div>
        </div>
        <h1
          className="absolute bottom-40 left-0 -z-50 w-full text-center font-Neue-Montreal-Bold leading-3 text-white md:bottom-36 lg:bottom-40 xl:bottom-40"
          style={{ fontSize: '16vw' }}
        >
          ZIRO DESIGN
        </h1>
      </footer>
      <div className="tracking-3pct relative z-10 flex w-full items-center justify-between bg-black px-10 py-8 xl:py-10">
        <h1 className="pr-2 font-Neue-Montreal-Bold text-[3vw] text-white lg:text-5xl xl:text-[4vw]">
          BOOK A TIME FOR YOUR WORK
        </h1>
        <p className="tracking-3pct max-w-[250px] font-Neue-Montreal-Regular text-xs text-secondery sm:max-w-xs xl:max-w-sm xl:text-base">
          The opportunity to work with us is open — just drop your work email to take the first step
          toward joining a creative and passionate team.
        </p>
      </div>
    </div>
  );
}
