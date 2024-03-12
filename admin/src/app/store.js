import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import roomReducer from "../features/room/roomSlice";
import bookingReducer from "../features/booking/bookingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
    booking: bookingReducer,
  },
});
