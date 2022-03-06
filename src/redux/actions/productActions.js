import { ActionTypes } from "../constants/actions-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

// export const removeSelectedProducts = (product) => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//     payload: product,
//   };
// };
