import { useEffect, useState } from "react";
import "./booking.styles.scss";
import { useParams, useNavigate } from "react-router-dom";
import {
  confirmBooking,
  deleteBooking,
  reset,
} from "../../features/booking/bookingSlice";
import { useDispatch, useSelector } from "react-redux";

// booking
const Booking = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.booking
  );

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      navigate("/dashboard");
    }
  }, [isSuccess, isLoading, message, isError]);
  useEffect(() => {
    dispatch(reset());
    const getBooking = async () => {
      try {
        const res = await fetch(`/api/bookings/${id}`);
        const data = await res.json();
        setBooking(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getBooking();
  }, []);

  const handleDelete = () => {
    dispatch(deleteBooking(id));
  };

  const handleConfirm = () => {
    dispatch(confirmBooking(id));
  };
  return (
    <div id="booking">
      <h1 className="heading center">Booking</h1>

      {booking && (
        <div className="content-wrapper">
          <div className="text-wrapper">
            <h1 className="heading"> {booking.name} </h1>

            <p className="email"> {booking.roomId.name} </p>
            <p className="email"> {booking.email} </p>
            <p className="email"> checkIn: {booking.checkInDate} </p>
            <p className="email"> checkout: {booking.checkOutDate} </p>
          </div>

          <div className="cta-wrapper">
            <button onClick={handleConfirm}>confirm</button>
            <button className="danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
