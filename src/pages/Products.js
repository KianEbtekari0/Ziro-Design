import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import rightArrow from '../assets/images/icons/right-arrow.svg';
import { APIError, errorMessages } from '../Errors';
import productImage from '../assets/images/projects/loewe-couv-1920x1277.webp';
import { GlassElement } from '../components/GlassElement/GlassElement';
import dotIcon from '../assets/images/icons/redDot.svg';
import RippleGrid from '../components/RippleGrid';
import arrow from '../assets/images/icons/arrow.svg';
import Categories from '../components/Categories';
import { Skeleton } from '../components/skeleton';

export default function Products() {
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

  // لیست اصلی محصولات
  const [allProducts, setAllProducts] = useState([
    { id: 1, name: 'Batman 3D Charachter', price: 1234, preview_url: productImage, tag: 'Photos' },
    { id: 2, name: 'products1', price: 1234, preview_url: productImage, tag: '3D objects' },
    { id: 3, name: 'products1', price: 1234, preview_url: productImage, tag: 'bundles' },
    { id: 4, name: 'products1', price: 1234, preview_url: productImage, tag: 'car' },
    { id: 5, name: 'products1', price: 1234, preview_url: productImage, tag: 'house' },
    { id: 6, name: 'products1', price: 1234, preview_url: productImage, tag: 'Photos' },
    { id: 7, name: 'products1', price: 1234, preview_url: productImage, tag: 'car' },
    { id: 8, name: 'products1', price: 1234, preview_url: productImage, tag: 'VFX Video' },
    { id: 9, name: 'products1', price: 1234, preview_url: productImage, tag: 'Photos' },
    { id: 10, name: 'products1', price: 1234, preview_url: productImage, tag: 'car' },
    { id: 11, name: 'products1', price: 1234, preview_url: productImage, tag: '3D objects' },
    { id: 12, name: 'products1', price: 1234, preview_url: productImage, tag: 'VFX Video' },
  ]);

  // لیست قابل فیلتر و نمایش
  const [products, setProducts] = useState(allProducts);

  const [isLoading, setIsLoading] = useState(true);
  const [, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  const allCategories = ['Discover', ...new Set(allProducts.map((product) => product.tag))];
  const [categories, setCategories] = useState(allCategories);

  let pageSize = 9;
  let pageNumbers;

  const changePaginate = (newpage) => setCurrentPage(newpage);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, pageCount));

  const pageCount = Math.ceil(products.length / pageSize);
  pageNumbers = Array.from(Array(pageCount).keys());

  // Pagination
  useEffect(() => {
    const endIndex = pageSize * currentPage;
    const startIndex = endIndex - pageSize;
    setPaginatedProducts(products.slice(startIndex, endIndex));
  }, [currentPage, products]);

  // Fetch Products from API
  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.gumroad.com/v2/products', {
      headers: { Authorization: `Bearer ${accessToken}` },
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
        setAllProducts(data.products);
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err.message);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  // Filter Products
  const filterProductsHandler = (category) => {
    setCurrentPage(1); // وقتی فیلتر اعمال می‌شه، صفحه اول رو نشون بده
    if (category === 'Discover') {
      setProducts(allProducts);
      return;
    }
    const filteredProducts = allProducts.filter((product) => product.tag === category);
    setProducts(filteredProducts);
  };

  return (
    <>
      <div style={{ width: '100%', height: '600px', position: 'absolute', top: '0px' }}>
        <RippleGrid />
      </div>
      <div className="container relative overflow-hidden">
        <div className="mt-28 flex flex-col items-center justify-center gap-5">
          <h1 className="px-5 text-center font-Neue-Montreal-Bold text-3xl uppercase tracking-3pct text-white sm:text-5xl lg:text-6xl xl:text-8xl">
            Discover the World’s Top 3D
          </h1>
          <p className="max-w-xl text-center font-Neue-Montreal-Medium text-xs tracking-3pct text-secondery sm:text-base xl:text-lg">
            The opportunity to work with us is open — just drop your work email to take the first
            step toward joining a creative and passionate team.
          </p>
        </div>
        <div className="mt-28">
          <div className="flex items-center gap-7">
            <input
              type="email"
              className="glassCard h-[46px] w-full max-w-3xl rounded-3xl p-3 font-Neue-Montreal-Bold text-white"
              placeholder="Search"
            />
            <Categories categories={categories} filterProducts={filterProductsHandler} />
          </div>
          <div className="relative z-10 mt-10 grid w-full grid-cols-1 gap-8 overflow-hidden lg:grid-cols-2 xl:grid-cols-3">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
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
              : paginatedProducts.map((product) => (
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
                              <button className="flex h-[40px] w-[95px] items-center justify-center gap-1.5 rounded-3xl bg-white font-Neue-Montreal-Bold text-sm text-[#262626]">
                                <img src={dotIcon} alt="Dot Icon" loading="lazy" />
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

          {/* Pagination */}
          <nav className="mt-9">
            <ul className="flex items-center justify-center gap-2">
              <a
                className="glassBtn flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl font-Neue-Montreal-Medium text-lg text-white"
                onClick={prevPage}
              >
                <img src={arrow} alt="arrow" />
              </a>
              {pageNumbers.map((pagesNumber) => (
                <li
                  onClick={() => changePaginate(pagesNumber + 1)}
                  className={`${pagesNumber + 1 === currentPage ? '' : 'cursor-pointer text-white'}`}
                  key={pagesNumber + 1}
                >
                  <a className="glassBtn flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl font-Neue-Montreal-Medium text-lg text-white">
                    {pagesNumber + 1}
                  </a>
                </li>
              ))}
              <a
                className="glassBtn flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl font-Neue-Montreal-Medium text-lg text-white"
                onClick={nextPage}
              >
                <img src={arrow} alt="arrow" className="rotate-180" />
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
