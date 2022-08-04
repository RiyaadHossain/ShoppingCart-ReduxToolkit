const { createSlice } = require("@reduxjs/toolkit");

const notifySlice = createSlice({
  name: "notify",
  initialState: { notification: {} },
  reducers: {
    showNotificaiton(state, action) {
      const { message, type, open } = action.payload;
      state.notification.type = type;
      state.notification.message = message;
      state.notification.open = open;
    },
  },
});

export const notifyActions = notifySlice.actions;
export default notifySlice.reducer;
