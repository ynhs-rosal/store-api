const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
  },
  brand: {
    type: String,
    required: [true, "must provide brand"],
  },
  price: {
    type: Number,
    required: [true, "must provide price"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", ProductSchema);
