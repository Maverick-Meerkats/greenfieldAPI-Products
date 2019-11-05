const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productInfo = new Schema({
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [
    {
      feature: String,
      value: String
    }
  ]
});

const productStyles = new Schema({
  product_id: String,
  results: [
    {
      style_id: Number,
      name: String,
      original_price: String,
      sale_price: String,
      default: Number,
      photos: [{ thumbnail_url: String, url: String }],
      skus: {
        XS: Number,
        S: Number,
        M: Number,
        L: Number,
        XL: Number,
        XXL: Number
      }
    }
  ]
});

const relatedProducts = new Schema([]);
