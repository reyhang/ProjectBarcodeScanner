import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART, ADD_QUANTITY, SUB_QUANTITY} from './actionTypes';

const addToCart = payload => dispatch => dispatch[{type: ADD_TO_CART, payload}];

const removeFromCart = payload => dispatch =>
 dispatch[{type: REMOVE_FROM_CART, payload}];

const removeAllCart = payload => dispatch => dispatch[{type: REMOVE_ALL_CART, payload}];

const addQuantity = payload => dispatch => dispatch[{type: ADD_QUANTITY,payload}];

const subQuantity = payload => dispatch => dispatch[{type:SUB_QUANTITY}];

export {addToCart, removeFromCart, removeAllCart,addQuantity,subQuantity};

/*  payload = State'e güncellenecek data  */
