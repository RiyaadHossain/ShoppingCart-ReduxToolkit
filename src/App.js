import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import "./App.css";
import { useEffect } from "react";
import { notifyActions } from "./store/notifySlice";
import { Notification } from "./components/Notification";
let firstRender = true

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { type, message, open } = useSelector((state) => state.notify.notification);

  useEffect(() => {
    
    if (firstRender) {
      firstRender = false
      return
    }
    /* Show Notification - Sending Data */
    dispatch(
      notifyActions.showNotificaiton({
        type: "info",
        message: "Requesting is sending",
        open: true,
      })
    );

    /* Send Cart to Database */
    const sendCartItems = async () => {
      const data = await fetch("https://common-project-000-default-rtdb.firebaseio.com/cartItems.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      await data.json();

      /* Show Notification - Sent Data Successfully */
      dispatch(
        notifyActions.showNotificaiton({
          type: "success",
          message: "Data is alredy sent to the Database",
          open: true,
        })
      );
    };

    sendCartItems().catch((err) => {
      console.log("nooooo")
      /* Show Notification - Request Failed */
      dispatch(
        notifyActions.showNotificaiton({
          type: "error",
          message: "Request has been failed",
          open: true,
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <div className="App">
     { open && <Notification severity={type} message={message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
