import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createBooking, reset } from "../../features/booking/bookingSlice";
import { useDispatch, useSelector } from "react-redux";

const Booking = () => {
  const { id: roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess } = useSelector((state) => state.booking);

  const [room, setRoom] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const { name, email, checkInDate, checkOutDate } = formData;

  useEffect(() => {
    const getRoom = async () => {
      try {
        const res = await fetch(`/api/rooms/${roomId}`);
        const data = await res.json();
        if (!res.ok) {
          return console.log("there was a problem getting room");
        }
        return setRoom(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getRoom();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate("/success");
      dispatch(reset());
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      roomId,
      name,
      email,
      checkInDate,
      checkOutDate,
    };

    dispatch(createBooking(dataToSubmit));
  };

  return (
    <div>
      <h1 className="heading center">Book Now</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter full name"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="name">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email address"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="name">Check In Date</label>
            <input
              type="date"
              name="checkInDate"
              value={checkInDate}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="name">Check Out Date</label>
            <input
              type="date"
              name="checkOutDate"
              value={checkOutDate}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
