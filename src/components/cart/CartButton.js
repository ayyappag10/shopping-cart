import React,{useState} from "react"
import Modal from "./Modal"
import CartItemsPage from "./CartItemsPage"
import {connect} from "react-redux"

const CartButton=({cartCount})=>{

    const [cartWindowVisible, setCartWindowVisible] = useState(false)

    function toggleModal(e){
        setCartWindowVisible(!cartWindowVisible)
        e.stopPropagation();
    }

    function  showCart() {
        setCartWindowVisible(true)
    }

    return(
        <div
        id="cart-button-cont">
        <button
        id="cart-button"
        onClick={showCart}>
            {/* <img src="./cartlogo.png" alt="MISSING png"/>  */}
            cart({cartCount})
            <Modal
            show={cartWindowVisible}>
                <CartItemsPage toggle ={ toggleModal}>
        
             </CartItemsPage>
        </Modal>
        </button>
        
        </div>
    )
}

function mapStateToProps(state){
    return{
        cartCount: state.total.items
    }
}

export default connect(mapStateToProps)(CartButton)