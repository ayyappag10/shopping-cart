import React,{useState} from "react"
import {connect} from "react-redux"
import CartProductDetails from "./CartProductDetails"

import shortid from 'shortid';


const CartItemsPage =(props)=>{

    return(
        <div
    id="cart-items-page">
        
        <button
        id="cart-page-close-btn"
        onClick={props.toggle}>
                x
            </button>
        {
            props.products.map(
                (product)=>{
                    return(
                        <CartProductDetails 
                        product= {product}
                        key={shortid.generate()}>
                        </CartProductDetails>
                    )
                }
            )
        }

        <div
        id="cart-total-info">
           <div className="seprator" id="cart-prod-tot-sep"></div>
           <h3>Total:</h3>        
            <p>Items: <b>{props.totalNoOfItems}</b></p>
            <p>Cost: <b>{props.totalCost}</b>$</p>
        </div>
    </div>  
    )
}

function mapStateToProps(state) {
    return {
         products: state.cart.products,
         totalNoOfItems: state.total.items,
         totalCost: state.total.cost
        }
}


export default connect(mapStateToProps)(CartItemsPage);