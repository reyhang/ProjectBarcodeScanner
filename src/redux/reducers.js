import {ADD_OR_REMOVE_CART, INCREMENT_COUNT} from './actionTypes';

const initialState = {
  cart: [
  {id:1,title:'Meyve',count:1},
  {id:2,title:'Sebze',count:1}
  ],
  product: [],
};


const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OR_REMOVE_CART:
      return {
        ...state,
        cart:action.payload};
     
    case INCREMENT_COUNT:
      return {
        ...state,
        cart:action.payload
      }    
  }
  return state
};

export default productReducer;