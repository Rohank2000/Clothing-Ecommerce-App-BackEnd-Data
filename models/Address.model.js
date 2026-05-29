const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    Country: {
      type: String,
      require: true,
    },
    FullName: {
      type: String,
      require: true,
    },
    MobileNumber: {
      type: String,
      require: true,
    },
    Pincode: {
      type: String,
      require: true,
    },
    FlatNo: {
      type: String,
      require: true,
    },
    Area: {
      type: String,
      require: true,
    },
    Landmark: {
      type: String,
      require: true,
    },
    Town: {
      type: String,
      require: true,
    },
    State: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
