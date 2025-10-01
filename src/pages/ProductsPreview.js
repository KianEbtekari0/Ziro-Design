import { useEffect, useState } from 'react';
import { APIError, errorMessages } from '../Errors';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { Link } from 'react-router';
import { GlassElement } from '../components/GlassElement/GlassElement';
import productImage from '../assets/images/projects/loewe-couv-1920x1277.webp';
import dotIcon from '../assets/images/icons/redDot.svg';
import cube from '../assets/images/cube.png';
import trendUp from '../assets/images/icons/trend-up.svg';
import '../index.css';
import { Skeleton } from '../components/skeleton';

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
  const [isLoading, setIsLoading] = useState(true);

  const visible = showAll ? products : products.slice(0, 3);

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
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err.message);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container relative mb-28 flex flex-col items-center" id="shop">
      <div className="relative mt-10 w-full">
        <div className="inverted-radius relative w-full">
          <div className="relative bg-[#0F0F0F]">
            <div className="px-5 py-5 sm:px-9 sm:py-10">
              <h1 className="pr-14 font-Neue-Montreal-Bold text-2xl uppercase tracking-3pct text-white sm:text-5xl xl:pr-20 xl:text-7xl">
                Step Into More Dimensions
              </h1>
              <p className="mt-4 max-w-2xl font-Neue-Montreal-Bold text-xs leading-relaxed tracking-3pct text-white sm:mt-5 sm:pr-12 sm:text-sm lg:mt-7 xl:max-w-7xl xl:text-3xl">
                Take a look at my other projects and dive deeper into the world of creativity. From
                experimental ideas{' '}
                <span className="text-secondery">
                  to polished designs, there’s so much more waiting to be explored
                </span>
              </p>
            </div>
          </div>
        </div>

        <img
          src={cube}
          loading="lazy"
          alt="cube"
          className="absolute right-5 top-2 z-20 w-10 sm:right-6 sm:top-4 sm:w-16 xl:right-10 xl:top-8 xl:w-[80px]"
        />
      </div>

      <div className="relative z-10 mt-10 grid w-full grid-cols-1 gap-8 overflow-hidden lg:grid-cols-2 xl:grid-cols-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex h-[350px] w-full rounded-[48px] bg-neutral-800 p-2">
                <div className="flex w-full flex-col self-end">
                  <div className="h-[100px] w-full rounded-[38px] bg-white/10 p-4 backdrop-blur-md sm:p-[14px]">
                    <Skeleton className="h-6 w-2/3 rounded-3xl" />
                    <div className="mt-3 flex items-center justify-between">
                      <Skeleton className="h-5 w-20 rounded-3xl" />
                      <Skeleton className="h-10 w-[95px] rounded-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          : visible.map((product) => (
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
                            to={product.short_url}
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

      {products.length > 3 && !showAll && (
        <>
          <div className="fade-shadow z-20"></div>
          <div className="z-40 mt-20">
            <Link
              to="/shop"
              className="glassBtn mt-3 flex h-[35px] w-[115px] cursor-pointer items-center justify-center gap-1 rounded-3xl font-Neue-Montreal-Regular text-xs text-white xs:mt-0 sm:h-[43px] sm:w-[135px] sm:text-sm xl:h-[45px] xl:w-[157px] xl:text-base"
            >
              See Products
              <img src={trendUp} alt="trend up button" className="mt-0.5 w-4 sm:w-5" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
