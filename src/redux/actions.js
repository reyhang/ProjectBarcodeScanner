import {ADD_OR_REMOVE_CART, INCREMENT_COUNT} from './actionTypes';

//item : ürünler

const addOrRemoveCart = ({item, cartItems, status}) => {
  let xa = [];

  const checkCart = cartItems.find(res => res.title === item);

  if (status) {
    if (checkCart) {
      const filterCart = cartItems.filter(res => res.title !== item);
      xa = [
        ...filterCart,
        {title: checkCart.title, id: checkCart.id, count: checkCart.count + 1},
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
      xa = [...filterCart];
    }
  }

  return dispatch => dispatch({type: ADD_OR_REMOVE_CART, payload: xa});
};

const incrementCount = ({item, cartItems}) => {
  const cartFilter = cartItems.map(res => {
    if (res.title === item.title) {
      res.count = res.count + 1;
    }
    return res;
  });

  const cart = [...cartFilter];

  return dispatch => dispatch({type: INCREMENT_COUNT, payload: cart});
};

export {addOrRemoveCart, incrementCount};

/*  payload = State'e güncellenecek data  */
