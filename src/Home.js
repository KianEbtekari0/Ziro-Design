import { useEffect, useState } from 'react'

export default function Home() {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('./pages/api/getProducts.js')
    .then(res => res.json())
    .then(data => setProducts(data.products || []))
  }, [])

  return (
    <div>
        {products.map(product => (
            <div>
                <h1>{product.name}</h1>
                <p>asc</p>
            </div>
        ))}
    </div>
  )
}
