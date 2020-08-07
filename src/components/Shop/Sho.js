/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart'


const componentName = () => {
    
   const frist10 = fakeData.slice(0,10);
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [products, setProducts] = useState(frist10);
   const [cart, setCart] = useState([]);
   

   const handleAddProduct = (product) => {
       console.log('product added', product);
       const newCart = [...cart, product];
       setCart(newCart);
   }
   
    
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(pd => <Product
                           handleAddProduct ={handleAddProduct} 
                            product ={pd}></Product>)
                    }
           
            </div>
            <div className="cart-container"> 
                
                <Cart cart={cart}></Cart>
                   

            </div>
        
        </div>
    );
};

export default componentName;