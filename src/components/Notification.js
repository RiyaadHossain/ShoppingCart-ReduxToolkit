import React from "react";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { notifyActions } from "../store/notifySlice";

export const Notification = ({ type, message }) => {
  const dispatch = useDispatch();

  /* Close Notification Function */
  const closeNotification = () => {
    dispatch(notifyActions.showNotificaiton({ open: false }));
  };

  return (
    <div>
      <Alert onClose={closeNotification} severity={type}>
        {message}
      </Alert>
    </div>
  );
};
