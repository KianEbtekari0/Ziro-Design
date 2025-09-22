import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import rightArrow from '../assets/images/icons/right-arrow.svg';
import calendar from '../assets/images/icons/calendar.svg';
import { GlassElement } from './GlassElement/GlassElement';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const accessToken = 'teI22PGHmIFjf8eu9M6hgJR8DJ1e3IkB7Eu0dWV9QdI';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.gumroad.com/v2/products/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <section className="container flex flex-col gap-8 mt-9">
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
        <div className="aspect-square w-full max-w-max flex-1 overflow-hidden rounded-xl md:aspect-[16/9] xl:w-[962px]">
          <img src={product.preview_url} alt="product" className="h-full w-full object-cover" />
        </div>

        <div>
          <h1 className="font-Neue-Montreal-Bold text-3xl tracking-3pct text-white sm:text-5xl lg:text-6xl xl:text-8xl">
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
          <button className="glassBtn mt-6 h-20 w-full rounded-2xl font-Neue-Montreal-Medium text-xl text-white">
            Add to Cart
          </button>
          <div className="glassBtn mt-6 rounded-2xl p-5 text-white">
            <h1 className="font-Neue-Montreal-Medium text-2xl">Shopping</h1>
            <div className="mt-4 grid grid-cols-2 gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
