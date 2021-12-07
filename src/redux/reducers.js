import {ADD_OR_REMOVE_CART, DECREASE_COUNT, INCREMENT_COUNT} from './actionTypes';

const initialState = {
  cart: [
  {id:1,title:'Meyve',count:1,img:"https://www.cagri.com/Uploads/UrunResimleri/buyuk/cilek-kg-86dd.jpg"},
  {id:2,title:'Sebze',count:1,img:"https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30013008/30013008_0_MC/8814444511282_1560925387535.jpg"}
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
      
    case DECREASE_COUNT:
      return {
        ...state,
        cart:action.payload
      } 
  }
  return state
};

export default productReducer;