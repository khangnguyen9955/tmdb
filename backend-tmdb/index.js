const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/user");
const watchListRouter = require("./routes/watchlist");
const listRouter = require("./routes/list");
dotenv.config();
dotenv.config({path: ".env"});
const app = express();
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connected to MongoDB");
});

app.use(cors()); // avoid cors error
app.use(cookieParser()); // to create and assign cookie
app.use(express.json());

//Routes
app.use("/user", authRoute);
app.use("/watchlist", watchListRouter);
app.use("/list", listRouter);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
