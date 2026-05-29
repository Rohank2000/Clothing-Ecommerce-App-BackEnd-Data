const mongoose = require("mongoose");

const ClothingSchema = new mongoose.Schema({
  productImg: {
    type: String,
    required: true,
  },
  ProductName: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId, ref:"Category", 
    required: true,
  },
  rating:{
      type: Number,
      max: 5,
      min: 0,
      default: 0,
      required:true,
  },
  price:{
    type: Number,
    required: true,
  }
},{timestamps:true});

const Clothing = mongoose.model("Clothing", ClothingSchema);

module.export = Clothing;
