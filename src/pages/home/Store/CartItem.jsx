import React , { useContext } from "react";
import CartContext from "./context/cart/CartContext";
import './storeStyle.scss'

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="product-wrap">
        <img src={item.image} className="productIMG"/>
        <div className="info-container">
            <div className="title">{item.title}</div>
            <div className="flavor">{item.flavor}</div>
            <div className="price">{`$${padPrice(item.price)}`}</div>
        </div>
        <button className='cartItem-removeBtn' onClick={() => removeItem(item._id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;