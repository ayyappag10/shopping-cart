import React,{useState} from "react"
import {connect} from "react-redux"
import updateSort from "../../services/sort/actions"
import {LOW_TO_HIGH, HIGH_TO_LOW,UPDATE_SORT} from "../../services/sort/actionTypes"
import { fetchProducts } from "../../services/products/actions"



const SortBar = ({updateSort, fetchProducts})=>{   

    function sortItemsLowToHigh(){
        updateSort(LOW_TO_HIGH)
        fetchProducts()
    }

    function sortItemsHighToLow(){
        updateSort(HIGH_TO_LOW)
        fetchProducts()
    }   
    
    function sortItems(e) {
        switch(e.target.value){
            case LOW_TO_HIGH:
                sortItemsLowToHigh();
                break;
            case HIGH_TO_LOW: 
                sortItemsHighToLow();
                break;
        }
    }

    return(
        <div
        id="sort-Bar">
        <span>sort </span>
        <select
        name="sort products"
        id="sort-products-dropdown"
        onChange={sortItems}
        >
            <option
            value={LOW_TO_HIGH}>Price low to hi</option>
            <option
            value={HIGH_TO_LOW}>Price hi to low</option>
            </select>         
        </div>
    )
}

function  mapDispatchToProps(dispatch) {
    return{
    updateSort: (sort)=>dispatch(updateSort(sort)),
    fetchProducts : ()=>dispatch(fetchProducts())}
}

export default connect(null,mapDispatchToProps)(SortBar);