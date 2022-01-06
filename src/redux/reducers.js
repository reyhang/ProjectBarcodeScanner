import {CREATE_CART, GET_CART, ADD_CART_ITEMS, USER_LOGIN} from './actionTypes';

const initialState = {
  cart: {},
  product: [],
  isLogin:false
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

    case USER_LOGIN:
      return {
        ...state,
        ...action.payload,
        isLogin:true,
      }
  }

  return state;
};

export default productReducer;
