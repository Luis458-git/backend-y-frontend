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
    return <p className="catalog-status" role="status">Cargando productos...</p>;
  }

  if (error) {
    return <p className="catalog-status catalog-status--error" role="alert">Error: {error}</p>;
  }

  return (
    <section className="catalog" aria-labelledby="catalog-title">
      <h2 id="catalog-title">Productos de ropa</h2>

      {products.length === 0 ? (
        <p className="catalog-status">No hay productos disponibles.</p>
      ) : (
        <ul className="products-grid">
          {products.map((product) => (
            <li className="product-card" key={product.id}>
              <h3>{product.name}</h3>
              <p className="product-category">Categoría: {product.category}</p>
              <p className="product-price">Precio: <strong>{product.price.toFixed(2)}</strong></p>
              <p className="product-stock">Stock: {product.stock}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
