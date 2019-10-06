import React from "react"
import {connect} from "react-redux"
import {addProduct, removeProduct, updateCart} from "../../services/cartupdate/actions"
import {updateTotal} from "../../services/total/actions"

const CartProductDetails = ({product,addProductToCart, removeProductFromCart, cartProducts, updateCart , updateTotal})=>{    

    function  addProductToCartHandler() {
        var cartItemIndex = cartProducts.indexOf(cartProducts.filter((item)=>{return (item.id === product.id)})[0]);        
        if(cartItemIndex >= 0){
            cartProducts[cartItemIndex].quantity += 1;
            updateCart(cartProducts)
        }
        else{
            var prodCopy = Object.assign({}, product)
            prodCopy.quantity = 1;
        addProductToCart(prodCopy)
        }
        updateTotal();
    }

    function  removeProductFromCartHandler() {
        var cartItemIndex = cartProducts.indexOf(cartProducts.filter((item)=>{return (item.id === product.id)})[0]);        
        if(cartItemIndex >= 0){
            if(cartProducts[cartItemIndex].quantity >1 ){
                cartProducts[cartItemIndex].quantity -= 1;
                updateCart(cartProducts)
            }
            else{                
                updateCart(cartProducts.filter((prods)=>(prods.id != product.id)))
            }
        }
        updateTotal();
    }
    return(
        <div>
            <img
            id="cart-image"
            src= {product.imgUrl}>
            </img>
            <ul
            id="cart-item-info">
                <li>{product.name}</li>
                <li>{product.price}$</li>
            </ul>
            <div
            id="cart-item-incr-decr-container">
          <button
        className="add-to-cart-button"
        onClick={removeProductFromCartHandler}>
            -
        </button>
        <span id="quantity"> {product.quantity} </span>
            <button
        className="add-to-cart-button"
        onClick={addProductToCartHandler}>
            +
        </button>
            </div>            
        </div>
    )
}
function mapDispatchToProps(dispatch){

    return(
    {addProductToCart: (prod)=>dispatch(addProduct(prod)),
    removeProductFromCart: (prod)=>dispatch(removeProduct(prod)),
    updateCart: (prods)=>dispatch(updateCart(prods)),
    updateTotal: ()=>dispatch(updateTotal())})
}

function  mapStateToProps(state) {
    return{
        cartProducts: state.cart.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartProductDetails);