const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Please provide a cetegory name"],
        lowercase: true
    },
    description:{
        type: String
    }, 
    imageUrl:{
        type: String,
        validator:[validator.isURL, "Please provide a valid URL"]
    }
},{
    timestamps: true
})

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;