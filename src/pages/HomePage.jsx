import React, { useState } from "react";
import Products from "../components/Products/Products";
import { Error } from "../components/Error/Error";
import { useFetch } from "../hooks/useFetch";

export const HomePage = () => {
  const [countItem, setCountItem] = useState(10);
  const addMoreProduct = () => {
    setCountItem(countItem + 5)
  }
  const {
    data,
    error,
    loading
  } = useFetch(`https://fakestoreapi.com/products?limit=${countItem}`);
  if (loading) {


    return <h1>Loading...</h1>
  }

  if (error) {
    return <Error error={error} />
  }


  return (
    <Products
      data={data}
      addMoreProduct={addMoreProduct}
      countItem={countItem}
    />
  );
};
