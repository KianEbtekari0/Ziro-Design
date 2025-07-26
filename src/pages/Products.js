import { useState } from 'react';
import { APIError, errorMessages } from '../Errors'
import dotIcon from '../assets/images/redDotIcon.svg'
import LiquidGlass from 'liquid-glass-react';

export default function Products() {

    const accessToken = 'teI22PGHmIFjf8eu9M6hgJR8DJ1e3IkB7Eu0dWV9QdI';
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null);
 
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
    <div className='container'>
        <div>
            <h1 className='text-white font-Neue-Montreal-Bold uppercase mt-14 text-8xl'>Step Into More Dimensions</h1>
            <p className='text-secondery max-w-5xl mt-7 text-sm sm:text-base xl:text-lg font-Neue-Montreal-Bold'>Take a look at my other projects and dive deeper into the world of creativity. From experimental ideas to polished designs, there’s so much more waiting to be explored</p>
        </div>
        <div className='grid grid-cols-3 mt-10 gap-10'>
            {products.map(product => (
                <div className='flex model w-[550px] h-[350px] rounded-[50px] p-3 bg-cover' key={product.id} style={{ backgroundImage: `url(${product.preview_url})` }}>
                    <div className='flex self-end flex-col w-full rounded-[40px] px-5 py-4'>
                        <h1 className='text-white text-2xl font-Neue-Montreal-Bold'>{product.name}</h1>
                        <div className='flex items-center justify-between'>
                            <p className='text-white text-lg font-Neue-Montreal-Bold'>{product.price}<span className='text-white/50 ml-2 font-Neue-Montreal-Regular text-lg'>DOLLAR</span></p>
                            <a href='#' className='flex items-center gap-1.5 bg-white text-[#262626] text-sm font-Neue-Montreal-Bold px-5 py-3 rounded-3xl'>
                                <img src={dotIcon} alt="Dot Icon" />
                                PRICE
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
