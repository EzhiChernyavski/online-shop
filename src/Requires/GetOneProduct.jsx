import React from 'react';
import { useFetch } from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import OneProduct from "../Components/OneProduct/OneProduct";
import { Error } from "../Components/Error/Error";

export const GetOneProduct = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!!error) {
    return <Error error={error} />
  }

  return (
    <section>
      <OneProduct product={data} />
    </section>
  );
};

