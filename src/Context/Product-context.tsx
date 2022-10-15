/** @format */

import { createContext, useContext, useEffect, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { productReducer, initialstate1 } from "../Reducer/product-reducer";

type ProductContextProviderProps = {
  children: React.ReactNode;
};

type ActionProps = {
  type: any;
  payload: any;
};

type InitialProps1 = {
  data: [];
  sort: any;
  byStock: boolean;
  byFastDelivery: boolean;
  byRating: number;
  searchQuery: any;
};

type ProductContextType1 = {
  productState: InitialProps1;
  productDispatch: React.Dispatch<ActionProps>;
};

const ProductContext = createContext({} as ProductContextType1);

const ProductProvider = ({ children }: ProductContextProviderProps) => {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * (max + 1));
  }

  const products = [...Array(30)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    fastDelivery: faker.datatype.boolean(),
    ratings: getRandomInt(4),
  }));

  useEffect(() => {
    productDispatch({
      type: "FETCH_DATA",
      payload: { data: products },
    });
  }, []);

  console.log(products);

  const [productState, productDispatch] = useReducer(
    productReducer,
    initialstate1
  );

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => useContext(ProductContext);
export { ProductProvider, useProduct, ProductContext };
