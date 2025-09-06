import company1 from '../assets/images/company2.png';
import company2 from '../assets/images/company3.png';
import company3 from '../assets/images/company4.png';
import company4 from '../assets/images/company5.png';
import company5 from '../assets/images/company7.png';
import projectImg1 from '../assets/images/projects/12.png';
import projectImg2 from '../assets/images/projects/Rain-022.1038.png';
import projectImg3 from '../assets/images/projects/C==.png';
import trendUp from '../assets/images/trend-up-02.svg';
import copyIcon from '../assets/images/copy-icon.png';
import { GlassElement } from '../components/GlassElement/GlassElement';
import star1 from '../assets/images/star1.png';
import rightArrow from '../assets/images/rightArrow.png';
import checkIcon from '../assets/images/checkIcon.png';
import star2 from '../assets/images/star2.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';

export default function AboutUs() {
  gsap.registerPlugin(ScrollTrigger);
  const counter1Ref = useRef();
  const counter2Ref = useRef();

  useEffect(() => {
    gsap.to(counter1Ref.current, {
      textContent: 0,
      textContent: 31 + 'k',
      duration: 3,
      ease: 'power1.in',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: '.aboutSection',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.to(counter2Ref.current, {
      textContent: 0,
      textContent: 72 + 'k',
      duration: 3,
      ease: 'power1.in',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: '.aboutSection',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  const [copied, setCopied] = useState(false);
  const iconRef = useRef(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('zirodesign@gmail.com');

    setCopied(true);

    gsap.fromTo(
      iconRef.current,
      { scale: 0, rotate: -90, opacity: 0 },
      { scale: 1, rotate: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
    );

    setTimeout(() => {
      setCopied(false);
      gsap.fromTo(
        iconRef.current,
        { scale: 0, rotate: 90, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
      );
    }, 2000);
  };

  return (
    <div className="container bg-black pb-10" id="aboutus">
      <div className="relative flex overflow-hidden whitespace-nowrap px-8">
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black from-50% to-transparent"></div>
        <img src={star1} alt="star1" className="absolute left-0 z-30" />

        <div>
          <div className="logoAnimation inline-flex">
            <img
              src={company1}
              alt={'company-1'}
              className="mx-10 max-h-[50px]"
              draggable={false}
            />
            <img
              src={company2}
              alt={'company-2'}
              className="mx-10 max-h-[50px]"
              draggable={false}
            />
            <img
              src={company3}
              alt={'company-3'}
              className="mx-10 max-h-[50px]"
              draggable={false}
            />
            <img
              src={company4}
              alt={'company-4'}
              className="mx-10 max-h-[50px]"
              draggable={false}
            />
            <img
              src={company5}
              alt={'company-5'}
              className="mx-10 max-h-[50px]"
              draggable={false}
            />
            <img
              src={company1}
              alt={'company-1'}
              className="mx-10 max-h-[50px]"
              draggable={false}
            />
            <img
              src={company2}
              alt={'company-2'}
              className="mx-10 max-h-[50px]"
              draggable={false}
            />
            <img
              src={company3}
              alt={'company-3'}
              className="mx-10 max-h-[50px]"
              draggable={false}
            />
            <img
              src={company4}
              alt={'company-4'}
              className="mx-10 max-h-[50px]"
              draggable={false}
            />
            <img
              src={company5}
              alt={'company-5'}
              className="mx-10 max-h-[50px]"
              draggable={false}
            />
          </div>
          <div className="logoAnimation inline-flex">
            <img
              src={company1}
              alt={'company-1'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company2}
              alt={'company-2'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company3}
              alt={'company-3'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company4}
              alt={'company-4'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company5}
              alt={'company-5'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company1}
              alt={'company-1'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company2}
              alt={'company-2'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company3}
              alt={'company-3'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company4}
              alt={'company-4'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company5}
              alt={'company-5'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
          </div>
          <div className="logoAnimation inline-flex">
            <img
              src={company1}
              alt={'company-1'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company2}
              alt={'company-2'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company3}
              alt={'company-3'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company4}
              alt={'company-4'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company5}
              alt={'company-5'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company1}
              alt={'company-1'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company2}
              alt={'company-2'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company3}
              alt={'company-3'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company4}
              alt={'company-4'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
            <img
              src={company5}
              alt={'company-5'}
              className="mx-10 block max-h-[50px]"
              draggable={false}
            />
          </div>
        </div>

        <img src={star2} alt="star2" className="absolute right-0 z-30" />
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black from-50% to-transparent"></div>
      </div>
      <div>
        <div className="aboutSection mt-10 flex flex-col gap-4 xl:flex-row xl:justify-between">
          <h1 className="font-Neue-Montreal-Bold text-3xl uppercase tracking-3pct text-white sm:text-4xl lg:max-w-3xl lg:text-6xl xl:max-w-max xl:text-[85px]">
            Safarpoor 3D ARTIST Designer
          </h1>
          <p className="max-w-[800px] font-Neue-Montreal-Bold text-base leading-10 tracking-3pct text-white sm:text-2xl xl:text-3xl">
            A versatile designer skilled in 2D, 3D, motion graphics, and{' '}
            <span className="text-secondery">creativity and design mastery, they craft unique</span>
          </p>
        </div>
        <div className="grid grid-cols-[40%_20%_1fr] gap-4 xl:grid-cols-[1fr_460px_1fr] xl:grid-rows-1">
          <div className="col-span-2 xl:col-span-1">
            <div className="flex items-center gap-1 xl:gap-5">
              <button className="glassBtn flex h-[43px] w-[136px] cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Regular text-sm text-white xl:h-[53px] xl:w-[157px] xl:text-base">
                Explore now
                <img src={trendUp} alt="trend up button" className="ml-1 mt-0.5" />
              </button>
              <button
                onClick={handleCopy}
                className="glassBtn my-9 flex h-[43px] w-[145px] cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Regular text-sm text-white xl:h-[53px] xl:w-[170px] xl:text-base"
              >
                <span ref={iconRef} className="flex h-5 w-5 items-center justify-center">
                  {copied ? (
                    <img src={checkIcon} alt="check icon" className="mr-3 mt-0.5" />
                  ) : (
                    <img src={copyIcon} alt="copy email button" className="mr-3 mt-0.5" />
                  )}
                </span>
                <span>{copied ? 'Email Copied!' : 'Copy My Email'}</span>
              </button>
            </div>
            <div
              className="relative col-span-4 h-[550px] rounded-[30px] bg-cover bg-center xl:h-[760px]"
              loading="lazy"
              style={{ backgroundImage: `url(${projectImg3})` }}
            >
              <button className="absolute right-6 top-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full xl:h-[50px] xl:w-[50px]">
                <GlassElement
                  width={100}
                  height={100}
                  radius={100}
                  depth={10}
                  blur={3}
                  center={'flex'}
                  chromaticAberration={5}
                >
                  <img
                    src={trendUp}
                    alt="trend up button"
                    loading="lazy"
                    className="w-6 -rotate-[105deg] xl:w-8"
                  />
                </GlassElement>
              </button>
              <h1 className="absolute bottom-10 left-10 max-w-md font-Neue-Montreal-Bold text-4xl leading-10 tracking-3pct text-white xl:bottom-12 xl:left-12 xl:text-[40px]">
                You Can See All Of My Project In Gallery
              </h1>
            </div>
          </div>

          <div className="col-span-3 flex w-full items-center justify-between gap-4 xl:col-span-1 xl:grid-cols-1 xl:grid-rows-2 xl:flex-col">
            <div className="order-1 flex w-full max-w-[500px] flex-col justify-center gap-6 rounded-[30px] bg-[#0F0F0F] px-7 py-12 text-white xl:order-2 xl:gap-12">
              <h1 className="text-center font-Neue-Montreal-Bold text-4xl tracking-3pct xl:text-5xl">
                Vision to Dimension
              </h1>
              <div className="flex items-center justify-center gap-9">
                <h1
                  className="w-[100px] font-Neue-Montreal-Bold text-6xl tracking-3pct xl:w-[140px] xl:text-8xl"
                  ref={counter1Ref}
                >
                  0k
                </h1>
                <div className="flex flex-col gap-3">
                  <h1 className="font-Neue-Montreal-Bold text-2xl tracking-3pct xl:text-3xl">
                    3D On Platform
                  </h1>
                  <p className="font-Neue-Montreal-Regular text-sm tracking-3pct text-secondery xl:text-lg">
                    The opportunity to work with
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-7">
                <h1
                  className="w-[110px] font-Neue-Montreal-Bold text-6xl tracking-3pct xl:w-[150px] xl:text-8xl"
                  ref={counter2Ref}
                >
                  0k
                </h1>
                <div className="flex flex-col gap-3">
                  <h1 className="font-Neue-Montreal-Bold text-2xl tracking-3pct xl:text-3xl">
                    View On Platform
                  </h1>
                  <p className="font-Neue-Montreal-Regular text-sm tracking-3pct text-secondery xl:text-lg">
                    The opportunity to work with
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative order-2 col-span-2 col-start-2 row-span-2 h-full w-full rounded-[30px] bg-cover bg-center xl:order-1 xl:col-span-1 xl:col-start-1 xl:row-span-1"
              style={{ backgroundImage: `url(${projectImg2})` }}
              loading='lazy'
            >
              <div className="absolute bottom-6 left-6">
                <h1 className="mb-5 max-w-sm font-Neue-Montreal-Bold text-3xl leading-10 tracking-3pct text-white xl:text-[40px]">
                  The best projects that won awards
                </h1>
                <button className="flex h-[35px] w-[107px] cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Regular text-sm text-white lg:w-[120px] xl:h-[40px] xl:text-base">
                  <GlassElement
                    width={100}
                    height={100}
                    radius={50}
                    depth={10}
                    blur={3}
                    center={'flex'}
                    chromaticAberration={5}
                  >
                    Let's See
                    <img src={rightArrow} alt="right arrow button" className="ml-0.5 mt-0.5 w-5" />
                  </GlassElement>
                </button>
              </div>
            </div>
          </div>

          <div
            className="-col-start-2 row-start-1 rounded-[30px] bg-cover bg-center"
            style={{ backgroundImage: `url(${projectImg1})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
