import { useState, useEffect } from "react";
import { useParams } from "react-router"

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
    <section className="container">
      <h1 className="text-white">{product.name}</h1>
      <p className="text-white">{product.description || 'No description available'}</p>
    </section>
  )
}
