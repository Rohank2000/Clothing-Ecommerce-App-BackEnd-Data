const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1,
  }
}, { _id: false }); 

const ShippingAddressSchema = new mongoose.Schema(
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
        },{ _id: false });

const OrderSchema = new mongoose.Schema({
  items: [CartItemSchema],
  totalAmount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  shippingAddress: {
    type: ShippingAddressSchema,
    required: true
  }
});

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    wishlist: [String],
    cart: [CartItemSchema],
    orders: [OrderSchema],
  },
  { timestamps: true }
);

const User = mongoose.model("UserProfile", UserSchema);
module.exports = User;
