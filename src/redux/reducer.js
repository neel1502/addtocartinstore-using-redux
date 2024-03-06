import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART,SELECT_HEADER_ITEM } from "./constant";

export const cartData = (data = [], action) => {

  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condition ", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART condition ", action);
      const updatedData = data.filter((item) => item !== action.data);
      return [...updatedData];

    case EMPTY_CART:
      console.warn("EMPTY CART condition ", action);
      return [];


    case SELECT_HEADER_ITEM:
      return {
        ...data,
        selectedHeaderItems: [...data.selectedHeaderItems, action.payload],
      };

    default:
      return data;
  }
};

