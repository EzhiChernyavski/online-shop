import React from 'react';
import { useFetch } from "../Hooks/useFetch";
import Products from "../Components/Products/Products";

export const GetProducts = () => {
  const {
    data,
    error,
    loading,
  } = useFetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=50`);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error !== '') {
    return <h1>{error}</h1> // написать UI компонент для показа ошибки
  }

  return (
    <section>
      {data.map(product => (
        <Products
          key={product.id}
          data={product}
        />
      ))}
    </section>
  );
};

