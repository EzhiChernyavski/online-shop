import React from 'react';
import { useFetch } from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import OneProduct from "../Components/OneProduct/OneProduct";

export const GetOneProduct = () => {
  const {id} = useParams();
  const {data, error, loading, } = useFetch (`https://api.escuelajs.co/api/v1/products/${id}`);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error !== '') {
    return <h1>{error}</h1> // написать UI компонент для показа ошибки
  }

  return (
    <section>
      <OneProduct product={data} />
    </section>
  );
};

