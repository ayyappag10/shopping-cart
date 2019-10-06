import {UDPATE_CART, ADD_PRODUCT, REMOVE_PRODUCT} from "./actiontypes"

const updateCart = function (products) {
    return{
        type: UDPATE_CART,
        payload: products
    }
}
const addProduct = function (product) {
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}
const removeProduct = function (product) {
    return{
        type: REMOVE_PRODUCT,
        payload: product
    }
}

export {updateCart, addProduct, removeProduct}
