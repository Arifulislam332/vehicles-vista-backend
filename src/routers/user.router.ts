import express, { Router } from "express";
import { createCurrentUser } from "../controllers/user.controller";
import { jwtCheck } from "../middlewares/auth.middleware";

const router: Router = express.Router();

// CREATE CURRENT USER
router.post("/", jwtCheck, createCurrentUser);

export default router;
