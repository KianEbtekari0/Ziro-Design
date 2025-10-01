import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { APIError, errorMessages } from '../Errors';
import { GlassElement } from '../components/GlassElement/GlassElement';
import house from '../assets/images/icons/collectionHouse.svg';
import car from '../assets/images/icons/collectionCar.svg';
import character from '../assets/images/icons/collectionCharacter.svg';
import bgImage from '../assets/images/projects/allproductsbg.webp';
import trendUp from '../assets/images/icons/trend-up.svg';
import rightArrow from '../assets/images/icons/right-arrow.svg';
import dotIcon from '../assets/images/icons/redDot.svg';
import star from '../assets/images/icons/star.svg';

export default function AllProducts() {
  const faqs = [
    {
      id: 1,
      q: '1. Is it safe to buy from your website?',
      a: 'The opportunity to work with us is open — just drop your work email to take the first step toward joining a creative ',
    },
    {
      id: 2,
      q: '2. Can I request a refund?',
      a: 'The opportunity to work with us is open — just drop your work email to take the first step toward joining a creative ',
    },
    {
      id: 3,
      q: '3. How do I get my 3D file after purchase?',
      a: 'The opportunity to work with us is open — just drop your work email to take the first step toward joining a creative ',
    },
    {
      id: 4,
      q: '4. In what formats are the files available?',
      a: 'The opportunity to work with us is open — just drop your work email to take the first step toward joining a creative ',
    },
  ];

  const [activeId, setActiveId] = useState(null);
  const [products, setProducts] = useState([]);
  const [, setError] = useState(null);
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const refs = useRef({});

  const toggleFaq = (id) => {
    const el = refs.current[id];
    if (!el) return;

    if (activeId === id) {
      // close
      gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
      setActiveId(null);
    } else {
      // close previous
      if (activeId && refs.current[activeId]) {
        gsap.to(refs.current[activeId], { height: 0, opacity: 0, duration: 0.3 });
      }
      // open new
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: el.scrollHeight, opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
      setActiveId(id);
    }
  };

  useEffect(() => {
    fetch('https://api.gumroad.com/v2/products', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          switch (response.status) {
            case 401:
              throw new APIError(errorMessages.UNAUTHORIZED, 401);
            case 403:
              throw new APIError(errorMessages.FORBIDDEN, 403);
            case 429:
              throw new APIError(errorMessages.RATE_LIMIT, 429);
            default:
              throw new APIError(
                `${errorMessages.UNKNOWN} (HTTP ${response.status})`,
                response.status
              );
          }
        }
        return response.json();
      })
      .then((data) => {
        if (!data.success || !data.products || data.products.length === 0) {
          throw new APIError(errorMessages.NO_PRODUCTS, 200);
        }

        const sorted = [...data.products].sort(
          (a, b) => Number(b.sales_count || 0) - Number(a.sales_count || 0)
        );

        setProducts(sorted.slice(0, 3));
      })
      .catch((err) => {
        console.error('Error:', err.message);
        setError(err.message);
      });
  });

  return (
    <div>
      <div className="h-[60vh] sm:h-screen">
        {/* Background image for visual depth */}
        <img
          className="absolute left-0 top-0 h-[60vh] w-full object-cover sm:h-screen"
          alt="Background video"
          loading="lazy"
          src={bgImage}
        />

        {/* Hero section: communicates brand values with bold typography */}
        <div className="relative z-10 flex h-[60vh] flex-col items-center justify-center gap-4 text-center sm:h-[80vh] sm:gap-10">
          <h1 className="px-5 font-Neue-Montreal-Bold text-3xl uppercase tracking-3pct text-white sm:text-5xl lg:text-6xl xl:text-8xl">
            You Can Order My 3D Objects
          </h1>
          <p className="max-w-sm font-Neue-Montreal-Bold text-xs tracking-3pct text-white sm:max-w-3xl sm:text-xl xl:text-3xl">
            A versatile designer skilled in 2D, 3D, motion graphics, and creativity and{' '}
            <span className="text-secondery">design mastery, they craft unique</span>
          </p>

          <Link
            to="/products"
            className="flex h-[35px] w-[115px] cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Regular text-xs text-white sm:h-[43px] sm:w-[135px] sm:text-sm xl:h-[45px] xl:w-[157px] xl:text-base"
          >
            <GlassElement
              width={100}
              height={100}
              radius={50}
              depth={10}
              blur={3}
              center={'flex'}
              chromaticAberration={5}
            >
              Shop now
              <img src={trendUp} className="ml-1 mt-0.5 w-4 xl:w-5" alt="trend up" />
            </GlassElement>
          </Link>
        </div>
      </div>
      <div className="container">
        {/* Products Collections */}
        <div className="w-full">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
            {/* Left Side - Cards */}
            <div className="xl:row-start-0 row-start-2 flex h-full flex-col gap-4 sm:flex-row sm:flex-wrap">
              <div className="flex w-full flex-col items-center gap-5 sm:flex-row">
                <div className="flex h-[260px] w-full items-center justify-center rounded-xl bg-[#0F0F0F] sm:w-full">
                  <img src={house} alt="house" />
                </div>
                <div className="flex h-[260px] w-full items-center justify-center rounded-xl bg-[#0F0F0F] sm:w-full">
                  <img src={character} alt="character" />
                </div>
                <div className="flex h-[260px] w-full items-center justify-center rounded-xl bg-[#0F0F0F] sm:w-full">
                  <img src={car} alt="car" />
                </div>
              </div>
              <div className="flex w-full flex-col justify-between xs:flex-row">
                <p className="max-w-xs flex-1 pr-5 font-Neue-Montreal-Medium text-xs tracking-3pct text-secondery sm:max-w-md sm:text-base xl:text-lg">
                  The opportunity to work with us is open — just drop your work email to take the
                  first step toward joining a creative
                </p>
                <Link
                  to="/products"
                  className="glassBtn mt-3 flex h-[35px] w-[115px] cursor-pointer items-center justify-center gap-1 rounded-3xl font-Neue-Montreal-Regular text-xs text-white xs:mt-0 sm:h-[43px] sm:w-[135px] sm:text-sm xl:h-[45px] xl:w-[157px] xl:text-base"
                >
                  More Products
                  <img src={trendUp} alt="trend up button" className="mt-0.5 w-4 sm:w-5" />
                </Link>
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="row-start-0 xl:row-start-2">
              <h1 className="font-Neue-Montreal-Bold text-3xl tracking-3pct text-white sm:text-5xl lg:text-6xl xl:text-8xl">
                The Collections
              </h1>
              <p className="mt-5 font-Neue-Montreal-Bold text-xs leading-relaxed tracking-3pct text-white sm:mt-10 sm:text-xl xl:text-2xl">
                A versatile designer skilled in 2D design, 3D modeling, motion graphics, and
                Blender. With a strong creative vision and mastof design principles, they
                <span className="text-secondery">
                  Combining professional tools with fresh ideas, they breathe life into every
                  project. Their art is a fusion of beauty, they breathe life into every project.
                  Their art is a
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Best Selling Products */}
        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex max-w-max gap-1">
              <img src={star} alt="star" className="w-7 sm:w-10 lg:w-14 xl:w-20" />
              <h1 className="pr-5 font-Neue-Montreal-Bold text-3xl tracking-3pct text-white sm:text-5xl lg:pr-0 lg:text-6xl xl:text-8xl">
                New Arrival
              </h1>
            </div>
            <div className="hidden flex-1 items-center px-10 lg:flex">
              <div className="h-4 w-4 rounded-full bg-white"></div>

              <div className="h-1 w-full bg-white text-white"></div>

              <div className="h-4 w-4 rounded-full bg-white"></div>
            </div>

            <p className="mt-2 max-w-md font-Neue-Montreal-Medium text-xs tracking-3pct text-secondery sm:text-base lg:mt-0 xl:text-lg">
              The opportunity to work with us is open — just drop your work email to take the first
              step toward joining a creative
            </p>
          </div>
          <div className="mt-10 grid w-full grid-cols-1 gap-8 overflow-hidden lg:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div
                  className="model flex h-[350px] w-full rounded-[48px] bg-cover bg-center p-2"
                  style={{ backgroundImage: `url(${product.preview_url})` }}
                >
                  <div className="flex w-full flex-col self-end">
                    <GlassElement
                      width={'100%'}
                      height={'100px'}
                      radius={38}
                      depth={0}
                      blur={4}
                      chromaticAberration={3}
                    >
                      <div className="px-4 py-3 sm:px-[21px] sm:py-[14px]">
                        <h1 className="font-Neue-Montreal-Bold text-xl text-white sm:text-2xl">
                          {product.name}
                        </h1>
                        <div className="flex items-center justify-between sm:mt-1">
                          <p className="font-Neue-Montreal-Bold text-base text-white sm:text-lg">
                            {product.price}
                            <span className="ml-2 font-Neue-Montreal-Regular text-sm text-white/50 sm:text-base">
                              DOLLAR
                            </span>
                          </p>
                          <Link
                            to={`https://gumroad.com/l/${product.id}`}
                            className="flex h-[40px] w-[95px] items-center justify-center gap-1.5 rounded-3xl bg-white font-Neue-Montreal-Bold text-sm text-[#262626]"
                          >
                            <img src={dotIcon} alt="Dot Icon" loading="lazy" />
                            PRICE
                          </Link>
                        </div>
                      </div>
                    </GlassElement>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 flex flex-wrap items-center justify-between rounded-[50px] bg-[#0F0F0F] px-8 py-8 font-Neue-Montreal-Bold text-white sm:px-10 sm:py-10 lg:h-[300px] xl:h-[350px]">
          <div className="space-y-3 sm:space-y-6 xl:space-y-10">
            <h1 className="text-3xl tracking-3pct sm:text-5xl lg:text-6xl xl:text-7xl">
              FAQ Asked Questions
            </h1>
            <p className="max-w-sm font-Neue-Montreal-Bold text-xs tracking-3pct text-white sm:max-w-xl sm:text-sm xl:text-xl">
              Take a look at my other projects and dive deeper into the world experimental ideas{' '}
              <span className="text-secondery">
                to polished designs, there’s so much more waiting to be explored
              </span>
            </p>
          </div>
          <div className="flex h-full w-full max-w-2xl flex-col items-center justify-center lg:flex-1 xl:pl-10">
            {faqs.map((item, index) => (
              <div key={item.id}>
                <div
                  className="flex cursor-pointer justify-between py-2 xl:py-3"
                  onClick={() => toggleFaq(item.id)}
                >
                  <div className="flex flex-col">
                    <h1 className="text-lg sm:text-xl xl:text-2xl">{item.q}</h1>
                  </div>
                  <button className="glassBtn flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full sm:h-9 sm:w-9">
                    <img
                      src={rightArrow}
                      alt="arrow"
                      className={`${activeId === item.id ? 'rotate-90 duration-300' : 'w-3 duration-300 sm:w-5'}`}
                    />
                  </button>
                </div>
                <div
                  ref={(el) => (refs.current[item.id] = el)}
                  className="h-0 overflow-hidden pl-5 text-xs tracking-3pct text-secondery opacity-0 sm:text-base xl:text-lg"
                >
                  <div className="pb-4">{item.a}</div>
                </div>
                {/* line between each FAQ */}
                {index !== faqs.length - 1 && <hr className="border-1 border-white" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
