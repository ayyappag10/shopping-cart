import React from "react"
import FilterItem from "../filter/FilterItem";
import shortid from 'shortid';
import {connect} from 'react-redux';
import {updateFilters} from '../../services/filter/actions'
import {fetchProducts} from "../../services/products/actions"


const FiltersTab = ({updateFilters, fetchProducts, activeSizeFilters })=>{

    const filters=["xs","s","m","l","xl"]
   
    function toggleFilterHandler(e) {
        var slctdFilter = e.target.innerText;
        if(activeSizeFilters.includes(slctdFilter)) {
            activeSizeFilters = activeSizeFilters.filter((filter)=>filter != slctdFilter)
        }
        else{
            activeSizeFilters = [...activeSizeFilters, slctdFilter]            
        } 
        updateFilters(activeSizeFilters)
        fetchProducts();
    }

    return(
        <div
        id="filters-tab">
        <h3 id="filters-label">filters:</h3>
        <div
        id="filters-tab-items">
        {
            filters.map(
                (filter)=>{
                    return(
                        <FilterItem 
                        size={filter}
                        key={shortid.generate()}
                        active={activeSizeFilters.includes(filter)}
                        toggHandler = {toggleFilterHandler}>                            
                        </FilterItem>
                    )
                }
            )
        }
        </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        activeSizeFilters: state.filters.size
    }
}

function  mapDispatchToProps(dispatch) {
    return{
    updateFilters : (filters)=>dispatch(updateFilters(filters)),
    fetchProducts : ()=>dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersTab);