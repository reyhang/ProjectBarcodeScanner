import {CREATE_CART, GET_CART, ADD_CART_ITEMS} from './actionTypes';

const initialState = {
  cart: {},
  product: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case GET_CART:
      console.log(action.payload);
      return {
        ...state,
        cart: action.payload,
      };

    case ADD_CART_ITEMS:
      return {
        ...state,
        cart: action.payload,
      };
  }
  return state;
};

export default productReducer;
