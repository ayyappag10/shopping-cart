import {RCVD_PRODUCTS, FETCHING_PRODUCTS} from "./actiontypes"
const productReducer = function (state = {products:[], fetching:true}, action) 
{    
    switch(action.type)
    {
        case FETCHING_PRODUCTS:
            return Object.assign({}, state,{fetching: true} )
        case RCVD_PRODUCTS:
            return  Object.assign({}, state,  {products:action.payload, fetching: false})
        default:
            return state;
    }
}

export default productReducer;