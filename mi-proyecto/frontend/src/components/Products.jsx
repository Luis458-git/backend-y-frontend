import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch(
          'http://localhost:5000/api/products'
        );

        if (!response.ok) {
          throw new Error('No se pudieron cargar los productos.');
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p role="alert">Error: {error}</p>;
  }

  return (
    <section>
      <h2>Productos de ropa</h2>

      {products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Categoría: {product.category}</p>
              <p>Precio: {product.price.toFixed(2)}</p>
              <p>Stock: {product.stock}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
