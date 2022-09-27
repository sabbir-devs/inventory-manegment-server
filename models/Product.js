const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const productSchema = mongoose.Schema(
  {
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
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litter", "pcs", "bag"],
        message: "unit value can't be {VALUE}, must be kg/litter/pcs",
      },
    },
    imageURLs: [
      {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            if (!Array.isArray) {
              return false;
            }
            let isValid = true;
            value.forEach((url) => {
              if (!validator.isURL(url)) {
                isValid = false;
              }
            });
            return isValid;
          },
        },
        message: "Please provide valid image URL",
      },
    ],
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
      },
    }
  },
  {
    timestamps: true,
  }
);

// mongoose middleware for saving data: pre / post
productSchema.pre("save", function (next) {
  console.log("before saving data");
  if (this.quantity == 0) {
    this.status = "out-of-stock";
  }
  next();
});
// productSchema.post('save', function(doc,next){
//   console.log('after saving data');
//   next();
// })

productSchema.methods.logger = function () {
  console.log(`Data save for ${this.name}`);
};

// SCHEMA -> MODEL -> QUERY
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
