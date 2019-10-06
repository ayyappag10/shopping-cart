import {UPDATE_FILTERS} from "./actionTypes"

 const filterReducer = (state={size:[]}, action)=>{

    switch(action.type)
    {
        case UPDATE_FILTERS:
            return {...state, size: [...action.payload]}
        default:
            return state;
    }
}

export default filterReducer;