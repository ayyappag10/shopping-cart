import { UPDATE_TOTAL } from "./actionTypes";

const totalReducer = (
  state = {
    items: localStorage.getItem("cartTotalInfo") ? JSON.parse(localStorage.getItem("cartTotalInfo")).totalNoOfItems: 0,
    cost: localStorage.getItem("cartTotalInfo") ? JSON.parse(localStorage.getItem("cartTotalInfo")).totalCost :0
  },
  action
) => {
  switch (action.type) {
    case UPDATE_TOTAL:
      return Object.assign({}, state, { ...action.payload });
    default:
      return state;
  }
};

export default totalReducer;
