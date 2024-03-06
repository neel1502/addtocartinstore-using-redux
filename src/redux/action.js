import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART,UPDATE_QUANTITY,SELECT_HEADER_ITEM } from "./constant"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.warn("action emptyCart",)
    return {
        type: EMPTY_CART,
    }
}

export const selectHeaderItem = (item) => {
    return {
      type: SELECT_HEADER_ITEM,
      data: item,
    };
  };
export const updateQuantity = (item, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { item, quantity },
});


const initialState = {
  cartItems: [], 
};


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item === action.payload.item ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
  

    default:
      return state;
  }
};

export default cartReducer;
