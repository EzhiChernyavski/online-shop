import OneProduct from '../components/OneProduct/OneProduct';
import { useParams } from "react-router-dom";
import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Error } from "../components/Error/Error";

export const ProductPage = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <Error error={error} />
  }


  return (
    <OneProduct product={data}/>
  );
};