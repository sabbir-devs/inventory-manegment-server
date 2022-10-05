const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const supplierSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a brand name"],
        maxLength: 100,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid Email"]
    },
    brand: {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        id: {
            type: ObjectId,
            ref: "Brand",
            required: true,
        }
    },
    contactNumber: [{
        type: String,
        required: [true, "Please provide a contact number"],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value)
            }
        }
    }],
    emergencyContactNumber: [{
        type: String,
        required: [true, "Please provide a emergency contact number"],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value)
            }
        }
    }],
    tradeLicenceNumber: {
        type: Number,
        required: [true, "Please provide your trade licence number"]
    },
    presentAddress: {
        type: String,
        required: [true, "Please provide your present address"]
    },
    permanentAddress: {
        type: String,
        required: [true, "Please provide your permanent address"]
    },
    location: {
        type: String,
        trim: true,
        required: [true, "Please provide a store name"],
        lowercase: true,
        enum: {
            values: ['dhaka', 'chottogram', 'rajshahi', 'sylet', 'khulna', 'barishal', 'rangpur', 'moymonshing', 'tangail'],
            message: ["{VALU} is not a valid name"]
        }
    },
    imageURL: {
        type: String,
        validator: [validator.isURL, "Please provide a valid URL"]
    },
    nationalIdImageURL: {
        type: String,
        required: true,
        validator: [validator.isURL, "Please provide a valid URL"]
    },
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'inactive']
    }
}, {
    timestamps: true,
})



const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;