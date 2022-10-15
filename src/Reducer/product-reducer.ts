/** @format */

type ActionProps = {
  type: any;
  payload: any;
};

type InitialProps1 = {
  data: any;
  sort: string;
  byStock: boolean;
  byFastDelivery: boolean;
  byRating: number;
  searchQuery: string;
};

export const initialstate1: InitialProps1 = {
  data: [],
  sort: "",
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: "",
};

export const productReducer = (state: any, action: ActionProps) => {
  let filterStateCopy = { ...state };
  switch (action.type) {
    case "FETCH_DATA":
      let { data } = action.payload;
      // console.log(action.payload);
      // console.log(data);
      return { ...filterStateCopy, data };

    case "FETCH_PRICE":
      // console.log(filterStateCopy);
      console.log(action.payload.data[2].price);
      filterStateCopy = {
        ...filterStateCopy,

        data: action.payload.data.filter((value: any, i: number) => {
          if (action.payload.data[i].price < action.payload.price) {
            return value;
          } else {
            return false;
          }
        }),
      };
      return { ...filterStateCopy };

    case "FETCH_RATING":
      console.log(filterStateCopy);
      console.log(action.payload.data);
      filterStateCopy = {
        ...filterStateCopy,

        data: action.payload.data.filter((value: any, i: number) => {
          if (action.payload.data[i].ratings === action.payload.ratings) {
            return value;
          } else {
            return false;
          }
        }),
      };
      return { ...filterStateCopy };

    case "FETCH_SEARCH_NAME":
      console.log(action.payload.data);
      console.log("hi" + action);
      console.log(filterStateCopy.data);
      filterStateCopy = {
        ...filterStateCopy,

        data: action.payload.data.filter((value: any, i: number) => {
          if (
            action.payload.data[i].name
              .toLowerCase()
              .includes(action.payload.search)
          ) {
            return value;
          } else {
            return false;
          }

          // console.log(action.payload.data[i].color);
        }),
      };
      return { ...filterStateCopy };

    default:
      return state;
  }
};
