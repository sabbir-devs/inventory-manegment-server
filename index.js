const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// routes
const productRoute = require("./routes/product.route");


app.get("/", (req, res) => {
  res.send("Hello from server");
});


// add product get product from database
app.use('/api/v1/product', productRoute);



// export app
module.exports = app;
