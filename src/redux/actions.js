import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART} from './actionTypes';

const addToCart = payload => dispatch => dispatch[{type: ADD_TO_CART, payload}];

const removeFromCart = payload => dispatch =>
 dispatch[{type: REMOVE_FROM_CART, payload}];

const removeAllCart = payload => dispatch => dispatch[{type: REMOVE_ALL_CART, payload}];

export {addToCart, removeFromCart, removeAllCart};

/*  payload = State'e güncellenecek data  */
