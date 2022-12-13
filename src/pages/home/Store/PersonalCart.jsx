import React from 'react'
import './PersonalCart.scss'
import { useContext } from 'react'
import CartContext from "./context/cart/CartContext";
import CartItem from './CartItem';
import CartState from './context/cart/CartState';
//npm i format-currency

const PersonalCart = () => {
  const {cartItems} = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };
  return (
    <CartState>
<div className='temp-mainbox'>
    <div className='person-cart-container'>
      <div className='page-title'>
        Personal Cart
      </div>
      <div className='content-wrapper'>
        <div className='product-count'>Products</div>
        <div className='product-container'>
          {cartItems.length === 0 
          ? (<h4>Cart is Empty</h4>) 
          : ( 
            <ul>
              {cartItems.map(item => (
                <CartItem key={item._id} item={item}/>
              ))}
            </ul>
          )}    
        </div>
        <div className='payment-container'>
            <div className='payment-total'>Total: 
            {(cartItems.reduce((amount, item) => item.price + amount, 0))}
            </div>
            <div className='payment-method'>
                <div>Select Payment method:</div>
                <div className='payment-box'> 
                <label className="checkbox-container">
                    <input
                    //onChange={onClickChange}
                     type="checkbox"
                    //value={}
                    />
                    <span>Visa Debit</span>
                </label>
                <label className="checkbox-container">
                    <input
                    //onChange={onClickChange}
                     type="checkbox"
                    //value={}
                    />
                    <span>Cash on delivery</span>
                </label>
                <label className="checkbox-container">
                    <input
                    //onChange={onClickChange}
                     type="checkbox"
                    //value={}
                    />
                    <span>Alipay</span>
              </label>
              <label className="checkbox-container">
                    <input
                    //onChange={onClickChange}
                     type="checkbox"
                    //value={}
                    />
                    <span>Momo</span>
              </label>
              </div>
            </div>
            <button className='payment-confirm'>Confirm</button>
        </div>
      </div>
    </div>
</div>
</CartState>
  )
}

export default PersonalCart
