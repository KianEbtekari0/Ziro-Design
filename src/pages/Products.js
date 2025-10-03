import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router';
import { GlassElement } from '../components/GlassElement/GlassElement';
import dotIcon from '../assets/images/icons/redDot.svg';
import RippleGrid from '../components/RippleGrid';
import arrow from '../assets/images/icons/arrow.svg';
import Categories from '../components/Categories';
import { Skeleton } from '../components/skeleton';
import { CategorySkeleton } from '../components/CategorySkeleton';
import gsap from 'gsap';

export default function Products() {
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

  const [allProducts, setAllProducts] = useState([]);

  const [products, setProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userSearched, setUserSearched] = useState(false);
  const productRefs = useRef([]);
  const skeletonRefs = useRef([]);
  skeletonRefs.current = [];

  productRefs.current = [];

  const [categories, setCategories] = useState(['Discover']);
  const [variantsMap, setVariantsMap] = useState({});

  const pageSize = 9;
  const pageCount = Math.ceil(products.length / pageSize);
  let pageNumbers = Array.from(Array(pageCount).keys());

  const changePaginate = (newpage) => setCurrentPage(newpage);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, pageCount));

  useEffect(() => {
    const fetchProductsAndVariants = async () => {
      setIsLoading(true);

      try {
        const res = await fetch('https://api.gumroad.com/v2/products', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const data = await res.json();

        if (data.success) {
          setAllProducts(data.products);
          setProducts(data.products);
          setPaginatedProducts(data.products.slice(0, pageSize));

          const map = {};
          const allVariantTitles = new Set();

          await Promise.all(
            data.products.map(async (product) => {
              try {
                const resCat = await fetch(
                  `https://api.gumroad.com/v2/products/${product.id}/variant_categories?access_token=${accessToken}`
                );
                const dataCat = await resCat.json();

                if (dataCat.success) {
                  await Promise.all(
                    dataCat.variant_categories.map(async (cat) => {
                      try {
                        const resVar = await fetch(
                          `https://api.gumroad.com/v2/products/${product.id}/variant_categories/${encodeURIComponent(
                            cat.id
                          )}/variants?access_token=${accessToken}`
                        );
                        const dataVar = await resVar.json();

                        if (dataVar.success) {
                          const titles = dataVar.variants.map((v) => v.name);
                          if (!map[product.id]) map[product.id] = [];
                          map[product.id].push(...titles);
                          titles.forEach((t) => allVariantTitles.add(t));
                        }
                      } catch (err) {
                        console.error(err);
                      }
                    })
                  );
                }
              } catch (err) {
                console.error(err);
              }
            })
          );

          setVariantsMap(map);
          setCategories(['Discover', ...Array.from(allVariantTitles)]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsAndVariants();
  }, [accessToken]);

  // ---------------- Filter Products ----------------
  const filterProductsHandler = (category) => {
    setCurrentPage(1);
    setUserSearched(true);
    if (category === 'Discover') {
      setProducts(allProducts);
      return;
    }
    const filtered = allProducts.filter((p) => variantsMap[p.id]?.includes(category));
    setProducts(filtered);
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const endIndex = pageSize * currentPage;
    const startIndex = endIndex - pageSize;
    setPaginatedProducts(filteredProducts.slice(startIndex, endIndex));
  }, [currentPage, products, searchTerm]);

  useLayoutEffect(() => {
    if (!userSearched || paginatedProducts.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(productRefs.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
      });
    });

    return () => ctx.revert();
  }, [paginatedProducts, userSearched]);

  return (
    <>
      <div style={{ width: '100%', height: '1000px', position: 'absolute', top: '0px' }}>
        <RippleGrid />
      </div>
      <div className="container relative overflow-hidden">
        {/* Title */}
        <div className="mt-28 flex flex-col items-center justify-center gap-5">
          <h1 className="px-5 text-center font-Neue-Montreal-Bold text-3xl uppercase tracking-3pct text-white sm:text-5xl lg:text-6xl xl:text-8xl">
            Discover the World’s Top 3D
          </h1>
          <p className="max-w-xl text-center font-Neue-Montreal-Medium text-xs tracking-3pct text-secondery sm:text-base xl:text-lg">
            The opportunity to work with us is open — just drop your work email to take the first
            step toward joining a creative and passionate team.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="mt-28 flex items-center gap-7">
          <input
            type="email"
            className="glassCard h-[46px] w-full max-w-3xl rounded-3xl p-3 font-Neue-Montreal-Bold text-white"
            placeholder="Search"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setUserSearched(true);
            }}
          />
          {isLoading ? (
            <CategorySkeleton count={4} />
          ) : (
            <Categories categories={categories} filterProducts={filterProductsHandler} />
          )}
        </div>

        {/* Products Grid */}
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
                <Link
                  ref={(el) => {
                    if (el && !productRefs.current.includes(el)) {
                      productRefs.current.push(el);
                    }
                  }}
                  state={{ product, variants: variantsMap[product.id] }}
                  to={`/product/${product.id}`}
                  key={product.id}
                >
                  <div
                    className="model flex h-[350px] w-full rounded-[48px] bg-cover bg-center p-2 [text-shadow:_0_1px_10px_#000]"
                    style={{ backgroundImage: `url(${product.preview_url})` }}
                  >
                    <div className="flex w-full flex-col self-end">
                      <GlassElement
                        width={'100%'}
                        height={'100px'}
                        radius={38}
                        depth={10}
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
            <button
              className="glassBtn flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl font-Neue-Montreal-Medium text-lg text-white"
              onClick={prevPage}
            >
              <img src={arrow} alt="arrow" />
            </button>
            {pageNumbers.map((pagesNumber) => (
              <li
                onClick={() => changePaginate(pagesNumber + 1)}
                className={`${pagesNumber + 1 === currentPage ? '' : 'cursor-pointer text-white'}`}
                key={pagesNumber + 1}
              >
                <button className="glassBtn flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl font-Neue-Montreal-Medium text-lg text-white">
                  {pagesNumber + 1}
                </button>
              </li>
            ))}
            <button
              className="glassBtn flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl font-Neue-Montreal-Medium text-lg text-white"
              onClick={nextPage}
            >
              <img src={arrow} alt="arrow" className="rotate-180" />
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
}
