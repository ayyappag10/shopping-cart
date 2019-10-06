import {UPDATE_SORT, LOW_TO_HIGH} from "./actionTypes"


const sortReducer = (state={sort: LOW_TO_HIGH}, action)=>{
    switch(action.type){
        case UPDATE_SORT:
        return {sort: action.payload}
        default:
            return state; 
    }
}

export default sortReducer;