import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./bookingList.styles.scss"; // Import the CSS file for styling

const BookingList = ({ data }) => {
  // Sample data for demonstration
  //   const data = [
  //     { id: 1, name: "John Doe", email: "john@example.com", room: "101" },
  //     { id: 2, name: "Jane Doe", email: "jane@example.com", room: "102" },
  //     // Add more data as needed
  //   ];

  // Function to handle actions (e.g., edit, delete)
  const handleAction = (id, action) => {
    // Implement action logic here
    console.log(`${action} user with ID ${id}`);
  };

  return (
    <div className="container">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Room</th>
              <th>Confirmed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.roomId.name}</td>
                <td>{item.confirmed ? "Yes" : "No"}</td>
                <td>
                  <Link to={`/bookings/${item._id}`}> View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
