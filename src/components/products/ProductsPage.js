import React,{useEffect} from "react"
import ProductDetails from "./ProductDetails";
import {connect} from "react-redux"
import {fetchProducts} from "../../services/products/actions"
import shortid from 'shortid';
import Loading from "./Loading"



const ProductsPage = (props)=>{

    useEffect(()=>{
        props.dispatch(fetchProducts())
    },
    [])

    return(
        <div                
        id="products-page">>
            
        {props.fetching
        ?
        <Loading></Loading>
        :
        (
            props.products.map(
                (product)=>{
                    return(
                        <ProductDetails 
                        product= {product}
                        key={shortid.generate()}>
                        </ProductDetails>
                    )
                }
            )
        ) 
        }
        </div>     
    )
}

function mapStateToProps(state) {
    return { 
        products: state.shelf.products,
        fetching: state.shelf.fetching
     }
  }
  
export default connect(mapStateToProps)(ProductsPage)