import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import roomReducer from "../features/room/roomSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
  },
});
