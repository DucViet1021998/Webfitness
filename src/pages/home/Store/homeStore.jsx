import React, { useContext } from "react";
import { useCallback, useEffect, useState } from 'react';
import './StoreStyle.scss'
import ProductData from "./data";
import CartContext from "./context/cart/CartContext";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CATEGORIES = [
    "Amino Acids",
    "Pre-Workout",
    "L-Carnitine",
    "Electrolytes",
    "L-Argines"
  ];

  function padPrice(input) {
    const [dollars, cents = "00"] = String(input).split(".");
  
    return `${dollars}.${cents.padEnd(2, "0")}`;
  }
  
  function ProductFilters(props) {
    const { categories, onFilterChange } = props;
  
    return (
      <div className="filters">
        <div id="filters-header"></div>
  
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <label className="checkbox-container">
                <input
                  onChange={onFilterChange}
                  type="checkbox"
                  value={category}
                />
                <span className="checkmark"></span>
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  function Product(props) {
    const { product } = props;
    const {addToCart} = useContext(CartContext);
    return (
      <li key={product.id} className="product">
        <div className="product-box">
            <div className="product-wrap">
                <img src={product.image} className="productIMG"/>
                <div className="info-container">
                    <div className="title">{product.title}</div>
                    <div className="flavor">{product.flavor}</div>
                    <div className="category">Type: {product.category}</div>
                    <div className="price">{`$${padPrice(product.price)}`}</div>
                </div>
            </div>
            <div className="button-wrap">
                <button className="button">Shop Now</button>
                <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
      </li>
    );
  }
  
  function ProductsList(props) {
    const { products } = props;
  
    return (
      <ul className="products">
        {products.map((product) => (
          <Product product={product}/>
        ))}
      </ul>
    );
  }
  
  function HomeStore() {
    const [state, setState] = useState({
      products: ProductData,
      filters: new Set()
    });
    const {cartItems} = useContext(CartContext);
    const handleFilterChange = useCallback(
      (event) => {
        setState((previousState) => {
          let filters = new Set(previousState.filters);
          let products = ProductData;
  
          if (event.target.checked) {
            filters.add(event.target.value);
          } else {
            filters.delete(event.target.value);
          }
  
          if (filters.size) {
            products = products.filter((product) => {
              return filters.has(product.category);
            });
          }
  
          return {
            filters,
            products
          };
        });
      },
      [setState]
    );
  
    return (
      <div className="product-page-container">
        <div className="page-header">
          <div className="page-name">
            <div className="name-invert">THE FITNESS </div>
            <div className="name-normal">STORE</div>
          </div>
        </div>
        <div className="store-container">
          <div className="categories-container">
            <div className="product-count">{ProductData.length} PRODUCTS</div>
            <div className="categories-title">
                CATEGORIES
            </div>
            <div className="filter-wrapper">
              <ProductFilters
                categories={CATEGORIES}
                onFilterChange={handleFilterChange}
              />
            </div>
            <div className="cart">
              {cartItems.length > 0 && 
                <div className="cart-count">
                <ShoppingCartOutlinedIcon/>
                <span className="item-count">{cartItems.length}</span>
                </div>}
            </div>
          </div>
          <div className="product-list-container">
            <ProductsList products={state.products} />
          </div>
        </div>
      </div>
    );
  }

export default HomeStore;