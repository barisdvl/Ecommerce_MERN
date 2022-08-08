const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const database = require("./config/database");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const cartRoute = require("./routes/cartRoute");

const app = express();
dotenv.config();
database.connect();
const PORT = process.env.API_PORT || 5000;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);

app.listen(PORT, () => {
  console.log("Backend server is running!");
});
