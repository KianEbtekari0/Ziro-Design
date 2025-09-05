import { useState } from 'react';
import { APIError, errorMessages } from '../Errors';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { Link } from 'react-router';
import dotIcon from '../assets/images/redDotIcon.svg';
import cube from '../assets/images/cube.png';
import trendUp from '../assets/images/trend-up-02.svg';
import productImage from '../assets/images/car.png';
import { GlassElement } from '../components/GlassElement/GlassElement';
import '../index.css';

export default function Products() {
  gsap.registerPlugin(SplitText);

  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Batman 3D Charachter',
      price: 1234,
      preview_url: productImage,
    },
    { id: 2, name: 'products1', price: 1234, preview_url: productImage },
    { id: 3, name: 'products1', price: 1234, preview_url: productImage },
    { id: 4, name: 'products1', price: 1234, preview_url: productImage },
    { id: 5, name: 'products1', price: 1234, preview_url: productImage },
    { id: 6, name: 'products1', price: 1234, preview_url: productImage },
    { id: 7, name: 'products1', price: 1234, preview_url: productImage },
    { id: 8, name: 'products1', price: 1234, preview_url: productImage },
    { id: 9, name: 'products1', price: 1234, preview_url: productImage },
  ]);
  const [, setError] = useState(null);
  const [showAll] = useState(false);

  const visible = showAll ? products : products.slice(0, 6);

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

      setProducts(data.products);
    })
    .catch((err) => {
      console.error('Error:', err.message);
      setError(err.message);
    });

  return (
    <div className="container relative flex flex-col items-center mb-20">
      <div className="mt-14 flex w-full items-stretch">
        {/* Left rectangle */}
        <div className="relative flex-1 overflow-hidden rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#0F0F0F]">
          <div className="px-9 py-10">
            <h1 className="tracking-3pct font-Neue-Montreal-Bold uppercase text-white lg:text-6xl xl:text-8xl">
              Step Into More Dimensions
            </h1>
            <p className="mt-7 max-w-7xl tracking-3pct font-Neue-Montreal-Bold text-sm leading-relaxed text-white lg:text-xl xl:text-3xl">
              Take a look at my other projects and dive deeper into the world of creativity. From
              experimental ideas <span className="text-secondery">to polished designs, there’s so much more waiting to be explored</span>
            </p>
          </div>
        </div>

        {/* Right side - ثابت */}
        <div className="relative grid w-32 shrink-0 grid-rows-2">
          <img
            src={cube}
            alt=""
            className="absolute left-5 top-2 w-1/2 lg:left-5 lg:top-5 lg:w-2/3"
          />
          <div className="rounded-bl-[50px] bg-black"></div>
          <div className="rounded-br-[50px] rounded-tr-[50px] bg-[#0F0F0F]"></div>
          <div className="absolute left-0 top-0 -z-20 h-full w-16 rounded-br-[50px] rounded-tr-3xl bg-[#0F0F0F]"></div>
        </div>
      </div>

      <div className="relative z-10 mt-10 grid w-full grid-cols-1 gap-8 overflow-hidden lg:grid-cols-2 xl:grid-cols-3">
        {visible.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div
              className="model flex h-[350px] w-full max-w-[590px] rounded-[48px] bg-cover bg-center p-2"
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
                  <div className="px-[21px] py-[14px]">
                    <h1 className="font-Neue-Montreal-Bold text-2xl text-white">{product.name}</h1>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="font-Neue-Montreal-Bold text-lg text-white">
                        {product.price}
                        <span className="ml-2 font-Neue-Montreal-Regular text-base text-white/50">
                          DOLLAR
                        </span>
                      </p>
                      <button className="flex h-[40px] w-[95px] items-center justify-center gap-1.5 rounded-3xl bg-white font-Neue-Montreal-Bold text-sm text-[#262626]">
                        <img src={dotIcon} alt="Dot Icon" />
                        PRICE
                      </button>
                    </div>
                  </div>
                </GlassElement>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {products.length > 6 && !showAll && (
        <>
          <div className="fade-shadow z-20"></div>
          <div className="z-40 mt-20">
            <button className="flex h-[36px] w-[135px] cursor-pointer items-center justify-center gap-2 rounded-3xl font-Neue-Montreal-Regular text-sm text-white lg:w-[160px] xl:h-[46px] xl:text-base">
              <GlassElement
                width={165}
                height={50}
                radius={40}
                depth={10}
                blur={3}
                center={'flex'}
                chromaticAberration={5}
              >
                More Products
                <img src={trendUp} alt="trend up button" className="mt-0.5" />
              </GlassElement>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
