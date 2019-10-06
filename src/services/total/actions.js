import {UPDATE_TOTAL} from "./actionTypes"

export const updateTotal = ()=>(dispatch,  getState)=>{

    var cartProdsArr = getState().cart.products;

    function  computeTotalNoOfItems(list) {
       return list.reduce((prevNoOfItmes, curProd)=>prevNoOfItmes + curProd.quantity, 0)
    }

    function  computeTotalCost(list) {        
       return list.reduce((prevNoOfItmes, curProd)=>prevNoOfItmes + curProd.price*curProd.quantity, 0)
    }

    var totCost;
    var totItmes ;

    totCost = computeTotalCost(cartProdsArr);
    totItmes = computeTotalNoOfItems(cartProdsArr)

    let totalPayload={
        items:totItmes ,
        cost: totCost
    }

    dispatch({
        type: UPDATE_TOTAL,
        payload: totalPayload
    })

}