import { useEffect, useState } from 'react';

const newState = [
  {
    id: '3',
    image: 'https://arepa.s3.amazonaws.com/mug.png',
    title: 'Mug',
    price: 10,
    description: 'bla bla bla bla bla',
  },
];

const usePlatziProducts = (API, preloadedProducts) => {
  const [baseProducts, setProducts] = useState(preloadedProducts);

  const init = {
    method: 'GET',
    headers: {
      Accept: '*/*',
    },
    mode: 'cors',
  };

  useEffect(() => {
    setProducts(newState);
    fetch(API, init)
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  }, []);

  return baseProducts;
};

export default usePlatziProducts;
