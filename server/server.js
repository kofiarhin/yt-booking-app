const dotenv = require("dotenv").config();
const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const app = express();
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 5000;

// connect to database
connectDB();

// setup middlewares
app.use(cookieParser());
app.use(express.json());

// setup routes
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`listening on on port ${port}`));
