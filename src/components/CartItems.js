import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import "./Cart.css";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li>
            <CartItem id={item.id} quantity={item.quantity} price={item.price} name={item.name} total={item.totalPrice} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
