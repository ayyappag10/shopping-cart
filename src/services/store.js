import Reducer from "./reducers"
import {createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";


const store = createStore(Reducer, applyMiddleware(thunk));

store.subscribe(()=>{
    let state = store.getState();
    localStorage.setItem("cartProducts", JSON.stringify(state.cart.products));
    localStorage.setItem("cartTotalInfo", JSON.stringify({totalNoOfItems:state.total.items, totalCost:state.total.cost}))
})

export default store;

