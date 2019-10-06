import {UPDATE_SORT} from "./actionTypes"

export const updateSort = (sort)=>{
 return({
     type: UPDATE_SORT, 
     payload: sort
 })
}

export default updateSort