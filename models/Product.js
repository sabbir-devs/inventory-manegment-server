const mongoose = require('mongoose');

// schema design
const productSchema = mongoose.Schema({
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
      values: ["kg", "litter", "pcs"],
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
  // supplier: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Suplier",
  // },
  // categories: [{
  //   name: {
  //     type: String,
  //     require: true
  //   },
  //   _id: mongoose.Schema.Types.ObjectId
  // }]

  //   createdAt: {
  //     type: Date,
  //     default: Date.now
  //   },
  //   updatedAt: {
  //     type: Date,
  //     default: Date.now,
  //   }


}, {
  timestamps: true
});

// mongoes middleware for saving data: pre / post
productSchema.pre('save', function (next) {
  console.log('before saving data');
  if (this.quantity == 0) {
    this.status = "out-of-stock"
  }
  next();
})
// productSchema.post('save', function(doc,next){
//   console.log('after saving data');
//   next();
// })

productSchema.methods.logger = function () {
  console.log(`Data save for ${this.name}`)
}

// SCHEMA -> MODEL -> QUERY
const Product = mongoose.model('Product', productSchema);

module.exports = Product;