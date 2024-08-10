import express, { Router } from "express";
import {
  createCurrentUser,
  updateCurrentUser,
} from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";
import { validateMyUserRequest } from "../dto/user.dto";

const router: Router = express.Router();

// CREATE CURRENT USER
router.post("/", jwtCheck, createCurrentUser);

// UPDATE CURRENT USER
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser);

export default router;
