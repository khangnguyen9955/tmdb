const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/user");
const watchListRouter = require("./routes/watchlist");
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL, () => {
	console.log("Connected to MongoDB");
});
app.use(cors()); // avoid cors error
app.use(cookieParser()); // to create and assign cookie
app.use(express.json());

//Routes
app.use("/user", authRoute);
// app.use("/watchlist", watchListRouter);
app.listen(8000, () => {
	console.log("Server is running on 8000");
});
