import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import "./App.css";
import { useEffect } from "react";
import { Notification } from "./components/Notification";
import { getData, sendData } from "./store/cartActions";
let firstRender = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { type, message, open } = useSelector(
    (state) => state.notify.notification
  );

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    /* Send the Data to Database */
    dispatch(sendData(cart));
  }, [cart, dispatch]);

  return (
    <div className="App">
      {open && <Notification severity={type} message={message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
