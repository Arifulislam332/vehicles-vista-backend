import { Request, Response } from "express";
import CarShop from "../models/car.model";
import { uploadImages } from "../utils/multer.util";

export const createCars = async (req: Request, res: Response) => {
  try {
    const exitingCarShop = await CarShop.findOne({ user: req.userId });

    if (exitingCarShop) {
      return res.status(409).json({ message: "User have already car shop" });
    }

    const imageUrls = await uploadImages(req.files as Express.Multer.File[]);

    const carShop = new CarShop(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
