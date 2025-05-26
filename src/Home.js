import { useState } from "react";
import { APIError, errorMessages } from './Errors'

export default function Home() {

    const accessToken = 'teI22PGHmIFjf8eu9M6hgJR8DJ1e3IkB7Eu0dWV9QdI';
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null);
 
    fetch('https://api.gumroad.com/v2/products', {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    })
    .then(response => {
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
    })
    .then(data => {
        if (!data.success || !data.products || data.products.length === 0) {
            throw new APIError(errorMessages.NO_PRODUCTS, 200);
        }
    
        setProducts(data.products);
    })
    .catch(err => {
        console.error('Error:', err.message);
        setError(err.message);
    });

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <h1>{product.price}</h1>
                    <img src={product.preview_url} alt="" />
                </div>
            ))}
        </div>
    )
}
