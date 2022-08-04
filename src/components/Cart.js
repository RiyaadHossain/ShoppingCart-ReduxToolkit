import "./Cart.css";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  /* Show Cart Function */
  const showCart = () => {
    dispatch(cartActions.showCart());
  };

  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
      <p>Click Here to Visualize your Itmes</p>
    </div>
  );
};

export default Cart;
