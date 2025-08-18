import { useState } from 'react';
import { APIError, errorMessages } from '../Errors'
import dotIcon from '../assets/images/redDotIcon.svg'
import { Link } from 'react-router';
import trendUp from '../assets/images/trend-up-02.svg'
import '../index.css'
import productImage from '../assets/images/8b008977f4e1e4ee0c3e8d6a34532e7d.jpg'

export default function Products() {

    const accessToken = 'teI22PGHmIFjf8eu9M6hgJR8DJ1e3IkB7Eu0dWV9QdI';
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
    <div className='container flex flex-col items-center justify-center'>
        <div className='self-start'>
            <h1 className='text-white font-Neue-Montreal-Bold uppercase mt-14 sm:text-6xl xl:text-8xl'>Step Into More Dimensions</h1>
            <p className='text-white max-w-7xl mt-7 text-sm sm:text-xl xl:text-3xl font-Neue-Montreal-Bold'>Take a look at my other projects and dive deeper into the world of creativity. From experimental ideas <span className='text-secondery'>to polished designs, there’s so much more waiting to be explored</span></p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-10 gap-40 relative overflow-hidden z-10'>
            {visibale.map(product => (
                <a href={`/product/${product.id}`} key={product.id}>
                    <div className='flex model w-[550px] h-[350px] rounded-[50px] p-3 bg-cover' style={{ backgroundImage: `url(${product.preview_url})` }}>
                        <div className='flex self-end glassCard flex-col w-full rounded-[40px] px-5 py-4'>
                            <h1 className='text-white text-2xl font-Neue-Montreal-Bold'>{product.name}</h1>
                            <div className='flex items-center justify-between'>
                                <p className='text-white text-lg font-Neue-Montreal-Bold'>{product.price}<span className='text-white/50 ml-2 font-Neue-Montreal-Regular text-lg'>DOLLAR</span></p>
                                <Link to='#' className='flex items-center gap-1.5 bg-white text-[#262626] text-sm font-Neue-Montreal-Bold px-5 py-3 rounded-3xl'>
                                    <img src={dotIcon} alt="Dot Icon" />
                                    PRICE
                                </Link>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>

        {products.length > 6 && !showAll && (
            <>
                <div className='fade-shadow z-50'></div>
                <button className='glassBtn py-2 lg:py-3 text-sm lg:text-base font-Neue-Montreal-Regular px-4 lg:px-6 flex items-center justify-center gap-1.5 cursor-pointer text-white rounded-3xl'>
                    More Products
                    <img src={trendUp} alt="trend up button" className='mt-0.5' />
                </button>
            </>
        )}
    </div>
  )
}
