/** @format */

import { createContext, useContext, useEffect, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { productReducer, initialstate1 } from "../Reducer/quiz-reducer";

type QuizContextProviderProps = {
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

type QuizContextType1 = {
  productState: InitialProps1;
  productDispatch: React.Dispatch<ActionProps>;
};

const QuizContext = createContext({} as QuizContextType1);

const QuizProvider = ({ children }: QuizContextProviderProps) => {
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
    <QuizContext.Provider value={{ productState, productDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
const useQuiz = () => useContext(QuizContext);
export { QuizProvider, useQuiz, QuizContext };
