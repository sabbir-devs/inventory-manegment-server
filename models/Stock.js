const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

// schema design
const stockSchema = mongoose.Schema({
    productId: {
        type: ObjectId,
        required: true,
        ref: "Product"
    },
    name: {
        type: String,
        required: [true, "Pleasse provide a name for this product"],
        trim: true, // for remove expra space
        unique: [true, "Name must be unique"], // for one name one time
        minLength: [3, "Name must be at least 3 charecters."],
        maxLength: [100, "Name is too lorge"],
    },
    description: {
        type: String,
        required: [true, "product description required"],
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price can't be negative"],
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "litter", "pcs", "bag"],
            message: "unit value can't be {VALUE}, must be kg/litter/pcs",
        },
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "qunatity can't be negetive"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        message: "Quantity must be an integer",
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discountinued"],
            message: "status can't be {VALUE}"
        },
    },
    imageURLs: [{
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                if (!Array.isArray) {
                    return false;
                }
                let isValid = true;
                value.forEach(url => {
                    if (!validator.isURL(url)) {
                        isValid = false;
                    }
                });
                return isValid;
            }
        },
        message: "Please provide valid image URL",
    }],
    category: {
        type: String,
        required: true,
    },
    brand: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: ObjectId,
            ref: "Brand",
            required: true,
        }
    },
    store: {
        name: {
            type: String,
            trim: true,
            required: [true, "Please provide a store name"],
            lowercase: true,
            enum: {
                values: ['dhaka', 'chottogram', 'rajshahi', 'sylet', 'khulna', 'barishal', 'rangpur', 'moymonshing', 'tangail'],
                message: ["{VALU} is not a valid name"]
            }
        },
        id: {
            type: ObjectId,
            required: true,
            ref: "Store"
        }
    },
    suppliedBy: {
        name: {
            type: String,
            trim: true,
            required: [true, "Please provide supplier name"],
        },
        id:{
            type:ObjectId,
            ref:"Supplier"
        }
    }
}, {
    timestamps: true
});

// mongoose middleware for saving data: pre / post
stockSchema.pre('save', function (next) {
    console.log('before saving data');
    if (this.quantity == 0) {
        this.status = "out-of-stock"
    }
    next();
})


// SCHEMA -> MODEL -> QUERY
const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;