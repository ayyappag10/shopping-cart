import React from "react"
import {connect} from "react-redux"
import {addProduct, updateCart} from "../../services/cartupdate/actions"
import {updateTotal} from "../../services/total/actions"

const ProductDetails = ({product,addProductToCart, cartProducts, updateCart, updateTotal })=>{
            
    function  addProductToCartHandler() {
        var prodCopy = Object.assign({}, product)
        var cartItemIndex = cartProducts.indexOf(cartProducts.filter((item)=>{return (item.id == prodCopy.id)})[0]);        
        if(cartItemIndex >= 0){
            cartProducts[cartItemIndex].quantity += 1;
            updateCart(cartProducts)
        }
        else{            
        prodCopy.quantity = 1;
        addProductToCart(prodCopy)
        }
        updateTotal();
    }

    return(
        <>
        <div
        id="product-details">
            <img
            id="product-img"
            src= {product.imgUrl}>
            </img>
            <div
            id="product-info">

            <ul>
               <li>{product.name}</li>
                <li>price: <b>{product.price}$</b></li>
                <li>size: <b>{product.size}</b></li>
            </ul>
            <button
            className="add-to-cart-button"
            onClick={addProductToCartHandler}>
            add to cart
            </button>            
            </div>
        </div>
        
        <div className="seprator" id="prod-sep"></div>
        </>
    )
}
function mapDispatchToProps(dispatch){

    return({
        addProductToCart: (prod)=>dispatch(addProduct(prod)),
        updateCart: (prods)=>dispatch(updateCart(prods)),
        updateTotal: ()=>dispatch(updateTotal())
    })
}

function  mapStateToProps(state) {
    return{
        cartProducts: state.cart.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);