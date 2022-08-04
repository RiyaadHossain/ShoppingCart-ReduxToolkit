import React from "react";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { notifyActions } from "../store/notifySlice";

export const Notification = ({ type, message }) => {
  const dispatch = useDispatch();
  const closeNoti = () => {
    dispatch(notifyActions.showNotificaiton({ open: false }));
  };
  return (
    <div>
      <Alert onClose={closeNoti} severity={type}>
        {message}
      </Alert>
    </div>
  );
};
