import React from 'react';
import { useFetch } from "../Hooks/useFetch";
import Products from "../Components/Products/Products";
import { Error } from "../Components/Error/Error";

export const GetProducts = () => {
  const {
    data,
    error,
    loading
  } = useFetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=50`);



  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error !== '') {
    return <Error error={error} />
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

