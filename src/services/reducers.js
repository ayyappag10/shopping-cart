import { combineReducers } from "redux"
import productReducer from "./products/reducer"
import cartReducer from "./cartupdate/reducer"
import totalReducer from "./total/reducer" 
import filterReducer from "./filter/reducer"
import sortReducer from "./sort/reducer"

export default combineReducers({
   cart:cartReducer,
   shelf:productReducer,
   total: totalReducer,
   filters: filterReducer,
   displayOrder:sortReducer
})