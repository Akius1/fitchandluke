import * as actionTypes from "./cart.types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const addToLiked = (itemID) => {
    return {
      type: actionTypes.ADD_TO_LIKED,
      payload: {
        id: itemID,
      },
    };
  };

export const addTOProduct =(data) => {
    return {
        type: actionTypes.ADD_TO_PRODUCT,
        payload:{
            data: data
        }
    }
}

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};
export const removeFromLiked = (itemID) => {
    return {
      type: actionTypes.REMOVE_FROM_LIKED,
      payload: {
        id: itemID,
      },
    };
  };



export const cartItems = (itemID)=>{
  return {
    type: actionTypes.CART_ITEMS,
    payload: {
      id: itemID,
    },
  };
}