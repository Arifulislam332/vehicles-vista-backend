import express, { Router } from "express";
import { upload } from "../utils/multer.util";
import { createCars } from "../controllers/car.controller";

const router: Router = express.Router();

router.post("/", upload.array("imageFile", 5), createCars);

export default router;
