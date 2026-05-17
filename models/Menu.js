const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
{
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },

  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  image: {
    type: String
  },

  category: {
    type: String
  }

},
{
  timestamps: true
}
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;