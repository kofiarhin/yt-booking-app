import { getRooms, reset } from "../../features/room/roomSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomList from "../../component/RoomList/RoomList";
const Rooms = () => {
  const dispatch = useDispatch();
  const { rooms, isLoading, isSuccess } = useSelector((state) => state.room);
  useEffect(() => {
    dispatch(getRooms());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess]);

  if (isLoading) {
    return (
      <div>
        <h1 className="heading center">Loading....</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="container">
        <h1 className="heading center">Rooms</h1>
        {rooms.length > 0 ? <RoomList data={rooms} /> : null}
      </div>
    </div>
  );
};

export default Rooms;
