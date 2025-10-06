import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import rightArrow from '../assets/images/icons/right-arrow.svg';
import calendar from '../assets/images/icons/calendar.svg';
import cube from '../assets/images/icons/cube.svg';
import delivery from '../assets/images/icons/delivery.svg';
import folder from '../assets/images/icons/folder.svg';
import { GlassElement } from './GlassElement/GlassElement';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useLocation } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Skeleton } from './skeleton';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ProductDetails() {
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const { product, variants } = location.state || { product: null, variants: [] };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.gumroad.com/v2/products/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const data = await response.json();
        setProducts(data.product);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  });

  if (!products) {
    return (
      <section className="container mt-9 flex flex-col gap-8">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-20 rounded-md" />
          <Skeleton className="h-5 w-20 rounded-md" />
          <Skeleton className="h-5 w-20 rounded-md" />
        </div>

        {/* Main content Skeleton */}
        <div className="flex flex-col justify-between gap-10 xl:flex-row">
          {/* Image slider Skeleton */}
          <div className="relative w-full max-w-5xl flex-1">
            <Skeleton className="relative aspect-square h-[576px] w-full overflow-hidden rounded-xl md:aspect-[16/9]" />
            {/* products image */}
            <div className="mt-4 flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-20 w-full rounded-lg sm:h-32" /> // thumbnails
              ))}
            </div>
          </div>

          {/* Product info Skeleton */}
          <div className="max-w-xl flex-1 space-y-4">
            <Skeleton className="h-24 w-3/4 rounded-md" /> {/* name */}
            <Skeleton className="h-14 w-2/4 rounded-md" /> {/* price */}
            <Skeleton className="h-7 w-1/4 rounded-md" /> {/* title description */}
            <Skeleton className="mt-2 h-6 w-full rounded-md" /> {/* description */}
            <Skeleton className="mt-1 h-6 w-full rounded-md" />
            <Skeleton className="mt-1 h-6 w-full rounded-md" />
            <Skeleton className="mt-4 h-20 w-full rounded-2xl" /> {/* Add to Cart */}
            {/* Shopping cards Skeleton */}
            <div className="mt-6 grid grid-cols-1 gap-6 xs:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-14 w-14 rounded-full" /> {/* icon */}
                  <div className="flex-1 space-y-1">
                    <Skeleton className="h-5 w-2/5 rounded-md" /> {/* title */}
                    <Skeleton className="h-4 w-3/5 rounded-md" /> {/* description */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container mt-9 flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <img src={rightArrow} alt="right arrow" className="rotate-180" />
        <Link
          to="/products"
          className="font-Neue-Montreal-Medium text-lg tracking-3pct text-secondery"
        >
          Products
        </Link>
        <Link
          to="/products"
          className="font-Neue-Montreal-Medium text-lg tracking-3pct text-secondery"
        >
          Products Details
        </Link>
      </div>
      <div className="flex flex-col justify-between gap-10 xl:flex-row">
        <div className="relative w-full max-w-full flex-1 xl:max-w-3xl 2xl:max-w-5xl">
          {/* products image slider */}
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 rounded-xl"
          >
            <SwiperSlide>
              <div className="relative aspect-square w-full overflow-hidden rounded-xl md:aspect-[16/9]">
                <img
                  src={product.preview_url}
                  alt="product"
                  className="h-full w-full object-cover"
                />
                {/* Product Tag */}
                {variants && variants.length > 0 && (
                  <div className="absolute left-4 top-4">
                    <GlassElement
                      radius={38}
                      depth={10}
                      blur={3}
                      center="flex"
                      chromaticAberration={5}
                    >
                      <div className="flex h-10 flex-wrap items-center justify-center gap-1 px-4">
                        {variants.map((tag, index) => (
                          <span
                            key={index}
                            className="font-Neue-Montreal-Medium text-sm text-white [text-shadow:_0_1px_6px_#000]"
                          >
                            {tag}
                            {index < variants.length - 1 ? ',' : ''}
                          </span>
                        ))}
                      </div>
                    </GlassElement>
                  </div>
                )}
              </div>
            </SwiperSlide>
          </Swiper>

          {/* thumbnail slider */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mr-0 mt-4"
          >
            <SwiperSlide>
              <img
                src={product.preview_url}
                alt="product-thumb"
                className="h-20 w-full cursor-pointer rounded-lg object-cover sm:h-32"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          <h1 className="font-Neue-Montreal-Bold text-3xl tracking-3pct text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            {product.name}
          </h1>
          <p className="mt-6 font-Neue-Montreal-Bold text-3xl tracking-3pct text-white sm:text-5xl lg:text-6xl">
            ${product.price}
          </p>
          <h2 className="mt-6 font-Neue-Montreal-Medium text-xl text-white">Description & Fit</h2>
          <p className="mt-2 max-w-xl font-Neue-Montreal-Medium text-xs tracking-3pct text-secondery sm:text-base xl:text-lg">
            The opportunity to work with us is open — just drop your work email to take the first
            step toward joining a creative and passionate team.The opportunity to work with us is
            open — just drop your work email to take the first step toward joining a creative and
            passionate team.
          </p>
          <Link
            to={product.short_url}
            className="glassBtn mt-6 flex h-20 w-full items-center justify-center rounded-2xl font-Neue-Montreal-Medium text-xl text-white"
          >
            Add to Cart
          </Link>
          <div className="glassBtn mt-6 rounded-2xl p-5 text-white">
            <h1 className="font-Neue-Montreal-Medium text-2xl">Shopping</h1>
            <div className="mt-4 grid grid-cols-1 gap-6 xs:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center">
                  <GlassElement
                    width={100}
                    height={100}
                    radius={50}
                    depth={10}
                    blur={3}
                    center={'flex'}
                    chromaticAberration={5}
                  >
                    <img src={calendar} alt="calendar" />
                  </GlassElement>
                </div>
                <div>
                  <h1 className="font-Neue-Montreal-Medium text-xl">Time</h1>
                  <p className="font-Neue-Montreal-Medium text-base tracking-3pct text-secondery">
                    The opportunity to work
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center">
                  <GlassElement
                    width={100}
                    height={100}
                    radius={50}
                    depth={10}
                    blur={3}
                    center={'flex'}
                    chromaticAberration={5}
                  >
                    <img src={delivery} alt="delivery" />
                  </GlassElement>
                </div>
                <div>
                  <h1 className="font-Neue-Montreal-Medium text-xl">Delivery</h1>
                  <p className="font-Neue-Montreal-Medium text-base tracking-3pct text-secondery">
                    The opportunity to work
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center">
                  <GlassElement
                    width={100}
                    height={100}
                    radius={50}
                    depth={10}
                    blur={3}
                    center={'flex'}
                    chromaticAberration={5}
                  >
                    <img src={cube} alt="cube" />
                  </GlassElement>
                </div>
                <div>
                  <h1 className="font-Neue-Montreal-Medium text-xl">Time</h1>
                  <p className="font-Neue-Montreal-Medium text-base tracking-3pct text-secondery">
                    The opportunity to work
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center">
                  <GlassElement
                    width={100}
                    height={100}
                    radius={50}
                    depth={10}
                    blur={3}
                    center={'flex'}
                    chromaticAberration={5}
                  >
                    <img src={folder} alt="folder" />
                  </GlassElement>
                </div>
                <div>
                  <h1 className="font-Neue-Montreal-Medium text-xl">Format</h1>
                  <p className="font-Neue-Montreal-Medium text-base tracking-3pct text-secondery">
                    The opportunity to work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
