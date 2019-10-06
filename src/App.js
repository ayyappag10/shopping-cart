import React from 'react';
import './App.css';
import ProductsPage from './components/products/ProductsPage';
import FiltersTab from './components/filter/FiltersTab';
import SortBar from './components/sort/SortBar';
import CartButton from './components/cart/CartButton';
import {Provider} from 'react-redux'

import store from "./services/store"

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <div
      id="cart-sort-cont">
      <CartButton></CartButton>
      <SortBar></SortBar>
      </div>
      <FiltersTab></FiltersTab> 
      <ProductsPage></ProductsPage>    
    </div>
    </Provider>
  );
}

export default App;
