const mongoose = require('mongoose');
require('dotenv').config();
const colors = require('colors');
const app = require('./index');



// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`Database connection is successfull`.blue.bold);
})



const port = process.env.PORT || 8080;
// server
app.listen(port, () => {
    console.log("App is running on port:", port)
})