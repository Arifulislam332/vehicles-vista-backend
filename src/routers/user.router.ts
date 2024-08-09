import express, { Router } from "express";
import {
  createCurrentUser,
  updateCurrentUser,
} from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";

const router: Router = express.Router();

// CREATE CURRENT USER
router.post("/", jwtCheck, createCurrentUser);
// UPDATE CURRENT USER
router.put("/", jwtCheck, jwtParse, updateCurrentUser);

export default router;
