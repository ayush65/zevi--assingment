/** @format */

type ActionProps = {
  type: any;
  payload: any;
};

type InitialProps = {
  count: number;
  total_friends: number;
  total_suits: number;
  value: number;
  allquestion: number;
};

export const initialstate: InitialProps = {
  count: 0,
  total_friends: 0,
  total_suits: 0,
  value: 0,
  allquestion: 10,
};

export const reducerFunc = (statetotal: InitialProps, action: ActionProps) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...statetotal,
        count: statetotal.count + 1,
        allquestion: statetotal.allquestion,
      };
    }
    case "DECREMENT": {
      return {
        ...statetotal,
        count: statetotal.count - 1,
      };
    }
    case "CORRECT_FRIENDS_QUIZ": {
      return {
        ...statetotal,
        total_friends:
          Number(statetotal.total_friends) + Number(action.payload),
      };
    }
    case "CORRECT_SUITS_QUIZ": {
      return {
        ...statetotal,
        total_suits: Number(statetotal.total_suits) + Number(action.payload),
      };
    }
    case "WRONG_FRIENDS_QUIZ": {
      return {
        ...statetotal,
        total_friends:
          Number(statetotal.total_friends) - Number(action.payload),
      };
    }
    case "WRONG_SUITS_QUIZ": {
      return {
        ...statetotal,
        total_suits: Number(statetotal.total_suits) - Number(action.payload),
      };
    }
    case "obj1": {
      return {
        ...statetotal,
        value: 1,
      };
    }
    case "obj2": {
      return {
        ...statetotal,
        value: 0,
      };
    }
    case "EXIT": {
      return {
        ...statetotal,
        total_friends: 0,
        total_suits: 0,
      };
    }

    default:
      return statetotal;
  }
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
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return { byStock: false, byFastDelivery: false, byRating: 0 };

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
