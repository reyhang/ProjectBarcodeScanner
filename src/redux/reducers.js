import {ADD_OR_REMOVE_CART} from './actionTypes';

const initialState = {
  cart: [
  {id:1,title:'test',count:1}
  ],
  product: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OR_REMOVE_CART:
      return {
        ...state,
        cart:action.payload};
  }
  return state
};

export default productReducer;