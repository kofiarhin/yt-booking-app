import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/room/roomSlice";
import bookingReducer from "../features/booking/bookingSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
    booking: bookingReducer,
  },
});
