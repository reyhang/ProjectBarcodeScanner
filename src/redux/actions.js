import axios from 'axios';
import {CREATE_CART, GET_CART} from './actionTypes';

const createCart = async () => {
  const response = await axios
    .post(`http://10.0.2.2:3000/cart`, null, {params: {memberId: 8}})
    .then(res => res.data)
    .catch(e => console.log(e));
  return dispatch => dispatch({type: CREATE_CART, payload: response});
};

const getCart = () => {
  return async dispatch => {
    return axios
      .get(`http://10.0.2.2:3000/cart`, {params: {memberId: 8}})
      .then(res => {
        dispatch({type: GET_CART, payload: res.data});
      })
      .catch(e => console.log(e));
  };
};

const addCartItems = () => {
  return async dispatch => {
    return axios
      .post(`http://10.0.2.2:3000/cart`, null, {params: {memberId: 8}})
      .then(res => {
        dispatch({type: ADD_CART_ITEMS, payload: response});
      })
      .catch(e => console.log(e));
  };
};

export {createCart, getCart, addCartItems};

/*  payload = State'e güncellenecek data  */
/* const addOrRemoveCart = ({item, cartItems, status}) => {
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
  const mapCart = cartItems.map(res => {
    if (res.title === item.title) {
      res.count = res.count + 1;
    }
    return res;
  });

  const cart = [...mapCart];

  return dispatch => dispatch({type: DECREASE_COUNT, payload: cart});
};

const decreaseCount = ({item, cartItems}) => {

  if(item.count === 1) {
  const filterCart = cartItems.filter(res => res.title !== item.title);
  return dispatch => dispatch({type: DECREASE_COUNT, payload: filterCart});

  }
  const mapCart = cartItems.map( res=>{
    if (res.count > 1) {
      res.count = res.count - 1;
    
    }  return res
  });

  const cart = [...mapCart]
  return dispatch => dispatch({type: DECREASE_COUNT, payload: cart});
}; */
