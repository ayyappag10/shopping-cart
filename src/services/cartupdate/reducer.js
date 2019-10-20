import { UDPATE_CART } from "./actiontypes";
import { ADD_PRODUCT } from "./actiontypes";
import { REMOVE_PRODUCT } from "./actiontypes";
const cartReducer = function(
  state = { products: localStorage.getItem("cartProducts") ?  [...JSON.parse(localStorage.getItem("cartProducts"))]: [] },
  action
) {
  switch (action.type) {
    case UDPATE_CART:
      return { ...state, products: [...action.payload] };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case REMOVE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};

export default cartReducer;
