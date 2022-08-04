import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 0;
  const cart = useSelector((state) => state.cart.showCart);
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Increase the Total Price
  cartItems.map((item) => (total += item.totalPrice));

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
        {cart && <CartItems />}
      </div>
    </React.Fragment>
  );
};

export default Layout;
