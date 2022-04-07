import * as actionTypes from "./cart.types";

const INITIAL_STATE = {
  products: [],
  cart: [],
  liked: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((product) => {
        return product?.id === action.payload.id;
      });
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1, onCart: true }
                : item
            )
          : [...state.cart, { ...item, qty: 1, onCart: true }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item?.id !== action.payload.id
        ),
      };
   
    case actionTypes.ADD_TO_PRODUCT:
      return {
        ...state,
        products: action.payload?.data,
      };
    case actionTypes.ADD_TO_LIKED:
      const items = state.products.find((product) => {
        return product?.id === action.payload.id;
      });
      const like = state?.liked?.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        liked: like
          ? state.liked.map((item) =>
              item.id === action.payload.id
                ? { ...item, like: true }
                : item
            )
          : [...state.liked, { ...items, like: true }],
      };
    case actionTypes.REMOVE_FROM_LIKED:
      return {
        ...state,
        liked: state.liked.filter(
          (item) => item?.id !== action.payload.id
        ),
      };

      case actionTypes.CART_ITEMS:
        return {
          ...state,
          cart: state.cart.filter(
            (item) =>item?.qty !== 0
          ),
        };
    default:
      return state;
  }
};

export default cartReducer;
