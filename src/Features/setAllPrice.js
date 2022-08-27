export const setAllPrice = (price, countOfProduct, setPrice, setCountOfProduct) => {

  if (countOfProduct > 1) {
    setCountOfProduct(prevState => prevState + Number(countOfProduct))
    setPrice(prevState => prevState + (price * countOfProduct));
  } else {
    setCountOfProduct(prevState => prevState + 1);
    setPrice(prevState => prevState + price);
  }
};
