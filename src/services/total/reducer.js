import {UPDATE_TOTAL} from "./actionTypes"

const totalReducer = (state= 
    {
     items: JSON.parse(localStorage.getItem("cartTotalInfo")).totalNoOfItems,
     cost: JSON.parse(localStorage.getItem("cartTotalInfo")).totalCost
    }, action)=>{
    switch(action.type){

        case UPDATE_TOTAL:
        return Object.assign({}, state, {...action.payload} )
        default:
            return state; 
    }
}

export default totalReducer;
