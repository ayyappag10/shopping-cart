import {UPDATE_TOTAL} from "./actionTypes"

const totalReducer = (state={ items: 0, cost: 0}, action)=>{
    switch(action.type){

        case UPDATE_TOTAL:
        return Object.assign({}, state, {...action.payload} )
        default:
            return state; 
    }
}

export default totalReducer;
