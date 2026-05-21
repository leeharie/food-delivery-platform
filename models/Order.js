const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  items: [
    {
      menuId: String,
      name: String,
      quantity: Number,
      price: Number
    }
  ],

  totalPrice: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    default: "Pending"
  }

},
{
  timestamps: true
}
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;