const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// routes
const productRoute = require("./routes/product.route");
const brandRoute = require("./routes/brand.route");
const storeRoute = require("./routes/store.route")
const categoryRoute = require('./routes/category.route');
const suppliereRoute = require("./routes/supplier.route");
const stockRouter = require("./routes/supplier.route");


app.get("/", (req, res) => {
  res.send("server is running! chill bro🤟🤟");
});


// add product get product from database
app.use('/api/v1/product', productRoute);
app.use('/api/v1/brand', brandRoute);
app.use('/api/v1/store', storeRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/supplier', suppliereRoute);
app.use('/api/v1/stock', stockRouter)


// export app
module.exports = app;
