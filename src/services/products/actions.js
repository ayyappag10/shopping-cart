import {RCVD_PRODUCTS, FETCHING_PRODUCTS} from "./actiontypes"
import {HIGH_TO_LOW, LOW_TO_HIGH} from "../sort/actionTypes"

export const  fetchProducts  =()=>{ 

    return   (dispatch, getState)=>{
    dispatch(fethcingProducts());

    var state = getState()
        var activeFilters = state.filters.size;
        var sortMode = state.displayOrder.sort;        

        fetch("/data/products")
        .then(
            (data)=>{return data.json()}
        )
        .then((data)=>{

            data = Array.isArray(activeFilters) && activeFilters.length
            ? data.arrayOfProducts.filter((prod)=>activeFilters.includes(prod.size))
             :  data.arrayOfProducts

             switch(sortMode){
                 case LOW_TO_HIGH:
                    data.sort((a,b)=> a.price-b.price)
                    break;
                 case HIGH_TO_LOW:
                        data.sort((a,b)=> b.price-a.price);
                        break;
             }

             setTimeout(()=>dispatch({
                type: RCVD_PRODUCTS,
                payload: data
            }), 200)
        })
        .catch((err)=>console.log(err))
    }

}

export const fethcingProducts =()=>{
    return( {
        type: FETCHING_PRODUCTS,
        payload: ""
    })
}