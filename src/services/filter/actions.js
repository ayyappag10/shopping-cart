import {UPDATE_FILTERS} from "./actionTypes"
export const updateFilters = (filters)=>{
    return({
        type: UPDATE_FILTERS,
        payload: filters
    })
}
