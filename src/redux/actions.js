import {useSelector} from 'react-redux';
import {ADD_OR_REMOVE_CART} from './actionTypes';

//item : ürünler

const addOrRemoveCart = ({item, cartItems, status}) => {
  let xa = [];

  const checkCart = cartItems.find(res => res.title === item);
  
  if (status) {
    if (checkCart) {
      const filterCart = cartItems.filter(res => res.title !== item);
      xa = [
        ...filterCart,
        {
          id: checkCart.id,
          count: checkCart.count + 1,
          title: checkCart.title,
        },
      ];
    } else {
      xa = [
        ...cartItems,
        {
          title: item,
          count: 1,
          id: Math.floor(Math.random() * 150),
        },
      ];
    }
  } else {
      if (checkCart.count > 1) {
        const filterCart = cartItems.filter(res => res.title !== item);
      xa = [
        ...filterCart,
        {
          id: checkCart.id,
          count: checkCart.count - 1,
          title: checkCart.title,
        },
      ];
      } else {
        const filterCart = cartItems.filter(res => res.title !== item);
          xa= [...filterCart]
      }
  }

  return dispatch => dispatch({type: ADD_OR_REMOVE_CART, payload: xa});
};

export {addOrRemoveCart};

/*  payload = State'e güncellenecek data  */
