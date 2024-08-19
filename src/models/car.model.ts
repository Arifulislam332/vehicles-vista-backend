import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      default: () => new mongoose.Types.ObjectId(),
    },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrls: [{ type: String, required: true }],
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const carSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    deliveryPrice: { type: Number, required: true },
    estimatedDeliveryPrice: { type: Number, required: true },
    cartBrand: [{ type: String, required: true }],
    products: [productsSchema],
  },
  {
    timestamps: true,
  }
);

const CarShop = mongoose.model("CarShop", carSchema);

export default CarShop;
