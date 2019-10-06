import React from "react"

const FilterItem = ({size, toggHandler, active})=>{

    return(
        active?
        <div
        className="filter-item"
        id="filter-item-active"
        onClick = {toggHandler}>
           {size}
        </div>
        :
        <div
        className="filter-item"
        id="filter-item-inactive"
        onClick = {toggHandler}>
           {size}
        </div>
    )
}

export default FilterItem;