import arrowRight from '../assets/images/arrow-right.png'
import { GlassElement } from './GlassElement/GlassElement'

export default function Footer() {
  return (
    <div className='flex flex-col items-center relative justify-center'>
        <footer className='flex items-center z-0 justify-center max-w-7xl px-10 w-full py-20'>
            <div className='text-center absolute left-0 pl-10'>
                <h1 className='text-white font-Neue-Montreal-Bold text-2xl'>FAQ</h1>
                <div className='mt-2 flex flex-col'>
                    <a href='#' className='text-secondery font-Neue-Montreal-Regular'>Company</a>
                    <a href='#' className='text-secondery font-Neue-Montreal-Regular'>Employment</a>
                    <a href='#' className='text-secondery font-Neue-Montreal-Regular'>Order History</a>
                    <a href='#' className='text-secondery font-Neue-Montreal-Regular'>Terms & Services</a>
                </div>
            </div>
            <div className='text-center'>
                <h1 className='font-Neue-Montreal-Bold text-white mt-2 text-2xl'>BOOK A TIME!</h1>
                <div className='flex items-center justify-between flex-col gap-5 mt-2'>
                    <input type="email" className='glassCard text-white w-[320px] p-3 h-[40px] rounded-3xl font-Neue-Montreal-Bold' />
                    <a href='#' className='flex items-center gap-1.5 text-white text-sm font-Neue-Montreal-Medium'>
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
                    </a>
                </div>
            </div>
            <div className='absolute right-0 pr-7'>
                <h1 className='text-white font-Neue-Montreal-Bold text-2xl'>CONTACT US INFORMATION</h1>
                <div className='mt-2 flex items-center text-center flex-col'>
                    <p className='text-secondery font-Neue-Montreal-Regular'>09129212525</p>
                    <p className='text-secondery max-w-[200px] font-Neue-Montreal-Regular'>3785 Blackwell Street City Cordova State Province</p>
                    <div className='flex justify-center gap-2 mt-3'>
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
                    </div>
                </div>
            </div>
            <h1 className='absolute text-secondery left-0 bottom-40 md:bottom-36 lg:bottom-40 xl:bottom-40 leading-3 -z-10 w-full text-center font-Neue-Montreal-Bold' style={{ 'font-size': '16vw'}}>ZIRO DESIGN</h1>
        </footer>
        <div className='flex z-10 relative bg-black items-center justify-between w-full px-10 py-8 xl:py-10'>
            <h1 className='text-white font-Neue-Montreal-Bold text-[3vw] lg:text-5xl xl:text-[4vw] pr-2'>BOOK A TIME FOR YOUR WORK</h1>
            <p className='text-secondery text-xs xl:text-base font-Neue-Montreal-Regular max-w-[250px] sm:max-w-xs xl:max-w-sm'>The opportunity to work with us is open — just drop your work email to take the first step toward joining a creative and passionate team.</p>
        </div>
    </div>
  )
}
