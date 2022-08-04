import { cartActions } from "./cartSlice";
import { notifyActions } from "./notifySlice";

export const getData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://common-project-000-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        notifyActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};

export const sendData = (cart) => {
  return async (dispatch) => {
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
      const data = await fetch(
        "https://common-project-000-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
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

    try {
      await sendCartItems();
    } catch (error) {
      /* Show Notification - Request Failed */
      dispatch(
        notifyActions.showNotificaiton({
          type: "error",
          message: "Request has been failed",
          open: true,
        })
      );
    }
  };
};
