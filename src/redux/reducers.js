import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART} from './actionTypes';

const initialState = {
  cart: [],
  product: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]};

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id),
      };

    case REMOVE_ALL_CART:
      try {
        return cart;
      } catch (error) {
        console.log(error);
      }
  }
  return state
};

export default productReducer;