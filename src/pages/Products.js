import { useState } from 'react';
import { APIError, errorMessages } from '../Errors'
import { Link } from 'react-router';
import dotIcon from '../assets/images/redDotIcon.svg'
import ghaleb from '../assets/images/ghaleb.png'
import trendUp from '../assets/images/trend-up-02.svg'
import productImage from '../assets/images/car.png'
import { GlassElement } from '../components/GlassElement/GlassElement'
import '../index.css'

export default function Products() {

    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
    const [products, setProducts] = useState([
        {id:1, name: 'products1', price: 122, preview_url: productImage},
        {id:2, name: 'products1', price: 122, preview_url: productImage},
        {id:3, name: 'products1', price: 122, preview_url: productImage},
        {id:4, name: 'products1', price: 122, preview_url: productImage},
        {id:5, name: 'products1', price: 122, preview_url: productImage},
        {id:6, name: 'products1', price: 122, preview_url: productImage},
        {id:7, name: 'products1', price: 122, preview_url: productImage},
        {id:8, name: 'products1', price: 122, preview_url: productImage},
        {id:9, name: 'products1', price: 122, preview_url: productImage},
    ])
    const [, setError] = useState(null);
    const [showAll,] = useState(false)

    const visibale = showAll ? products : products.slice(0, 6)
 
    fetch('https://api.gumroad.com/v2/products', {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    }).then(response => {
        if (!response.ok) {
            switch (response.status) {
              case 401:
                throw new APIError(errorMessages.UNAUTHORIZED, 401);
              case 403:
                throw new APIError(errorMessages.FORBIDDEN, 403);
              case 429:
                throw new APIError(errorMessages.RATE_LIMIT, 429);
              default:
                throw new APIError(`${errorMessages.UNKNOWN} (HTTP ${response.status})`, response.status);
          }
        }
        return response.json();
    }).then(data => {
        if (!data.success || !data.products || data.products.length === 0) {
            throw new APIError(errorMessages.NO_PRODUCTS, 200);
        }
    
        setProducts(data.products);
    }).catch(err => {
        console.error('Error:', err.message);
        setError(err.message);
    });

  return (
    <div className='container flex flex-col relative items-center'>
        <div className='mt-14 bg-no-repeat relative bg-cover self-start w-full'>
            <svg className="absolute -z-10 inset-0 w-full h-full" viewBox="0 0 1836 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 50C0 22.3858 22.3858 0 50 0H1642.58C1670.19 0 1692.58 22.3858 1692.58 50V81.5C1692.58 109.114 1714.96 131.5 1742.58 131.5H1786C1813.61 131.5 1836 153.886 1836 181.5V210C1836 237.614 1813.61 260 1786 260H50C22.3858 260 0 237.614 0 210V50Z" fill="#666666"/>
                    <g clip-path="url(#clip0_1165_65)">
                        <path d="M1741.26 85.4196L1741.26 87.3328L1741.2 107.57L1722.82 96.9564L1722.88 74.8062L1724.42 75.698L1741.1 85.3216L1741.26 85.4196Z" fill="#C5C5FF" stroke="#111111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1759.53 74.8062L1759.47 96.9564L1741.2 107.57L1741.26 87.3328L1741.26 85.4196L1758 75.698L1759.53 74.8062Z" fill="#C5C5FF" stroke="#111111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1759.53 74.8062L1758 75.698L1741.26 85.4197L1741.1 85.3216L1724.42 75.698L1722.88 74.8062L1741.15 64.1936L1759.53 74.8062Z" fill="#C5C5FF" stroke="#111111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1777.92 85.4196L1777.91 87.3328L1777.85 107.57L1759.47 96.9564L1759.53 74.8062L1761.07 75.698L1777.75 85.3216L1777.92 85.4196Z" fill="#C5C5FF" stroke="#111111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1796.18 74.8062L1796.12 96.9564L1777.85 107.57L1777.91 87.3328L1777.92 85.4196L1794.65 75.698L1796.18 74.8062Z" fill="#C5C5FF" stroke="#111111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1796.18 74.8062L1794.65 75.698L1777.92 85.4197L1777.75 85.3216L1761.07 75.698L1759.53 74.8062L1777.8 64.1936L1796.18 74.8062Z" fill="#C5C5FF" stroke="#111111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1759.59 52.6561L1759.58 54.5693L1759.52 74.8063L1741.15 64.1937L1741.21 42.0435L1742.75 42.9345L1759.42 52.5589L1759.59 52.6561Z" fill="#C5C5FF" stroke="#111111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1777.85 42.0435L1777.79 64.1937L1759.52 74.8063L1759.58 54.5693L1759.59 52.6561L1776.32 42.9345L1777.85 42.0435Z" fill="#C5C5FF" stroke="#111111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1777.85 42.0434L1776.32 42.9344L1759.59 52.656L1759.42 52.5588L1742.75 42.9344L1741.21 42.0434L1759.48 31.4299L1777.85 42.0434Z" fill="#C5C5FF" stroke="#111111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                <defs>
                    <clipPath id="clip0_1165_65">
                    <rect width="81" height="81" fill="white" transform="translate(1719 29)"/>
                    </clipPath>
                </defs>
            </svg>
            <div className='py-10 px-9'>
                <h1 className='text-white font-Neue-Montreal-Bold uppercase sm:text-6xl xl:text-8xl'>Step Into More Dimensions</h1>
                <p className='text-white max-w-7xl mt-7 leading-relaxed text-sm sm:text-xl xl:text-3xl font-Neue-Montreal-Bold'>Take a look at my other projects and dive deeper into the world of creativity. From experimental ideas <span className='text-secondery'>to polished designs, there’s so much more waiting to be explored</span></p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full mt-10 gap-8 relative overflow-hidden z-10'>
            {visibale.map(product => (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <div className='flex model w-full h-[350px] rounded-[50px] p-3 bg-cover bg-center' style={{ backgroundImage: `url(${product.preview_url})` }}>
                        <div className='flex self-end flex-col w-full'>
                            <GlassElement
                                width={'100%'}
                                height={'100%'}
                                radius={40}
                                depth={0}
                                blur={4}
                                chromaticAberration={3}
                            >
                                <div className='px-4 py-3'>
                                    <h1 className='text-white text-2xl font-Neue-Montreal-Bold'>{product.name}</h1>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-white text-lg font-Neue-Montreal-Bold'>{product.price}<span className='text-white/50 ml-2 font-Neue-Montreal-Regular text-lg'>DOLLAR</span></p>
                                        <Link to='#' className='flex items-center gap-1.5 bg-white text-[#262626] text-sm font-Neue-Montreal-Bold px-5 py-2.5 rounded-3xl'>
                                            <img src={dotIcon} alt="Dot Icon" />
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

        {products.length > 6 && !showAll && (
            <>
                <div className='fade-shadow z-20'></div>
                <div className='z-40 mt-20'>
                    <GlassElement
                        width={165}
                        height={50}
                        radius={40}
                        depth={10}
                        blur={3}
                        center={'flex'}
                        chromaticAberration={5}
                    >
                        <button className='text-sm lg:text-base font-Neue-Montreal-Regular flex items-center justify-center gap-1.5 cursor-pointer text-white rounded-3xl'>
                            More Products
                            <img src={trendUp} alt="trend up button" className='mt-0.5' />
                        </button>
                    </GlassElement>`
                </div>
            </>
        )}
    </div>
  )
}
