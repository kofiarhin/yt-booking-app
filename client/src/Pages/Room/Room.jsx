import "./room.styles.scss";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, deleteRoom } from "../../features/room/roomSlice";
import Carousel from "../../component/Carousel/Carousel";

const Room = () => {
  const { isSuccess } = useSelector((state) => state.room);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const getRoom = async () => {
      try {
        const res = await fetch(`/api/rooms/${id}`);

        if (res.ok) {
          const data = await res.json();
          setRoom(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRoom();
  }, []);
  const handleDelete = () => {
    dispatch(deleteRoom(id));
  };

  return (
    <div id="room">
      <div className="container">
        {room ? (
          <div>
            <div className="img-wrapper">
              <Carousel data={room.img} />

              {/* <img src={room.img[0]} alt="" /> */}
            </div>
            <div className="text-wrapper">
              <h1 className="heading center"> {room.name} </h1>
              <p> {room.desc} </p>
              <h2> ${room.price.toFixed(2)} </h2>
            </div>

            <div className="cta-wrapper">
              <Link to={`/bookings/${room._id}`}>Book Now</Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Room;
