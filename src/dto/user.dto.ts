import { body } from "express-validator";
import { handleValidationErrors } from "../middlewares/validationError.middleware";

export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("addressLine1 must be a string"),
  body("city").isString().notEmpty().withMessage("city must be a string"),
  body("country").isString().notEmpty().withMessage("country must be a string"),
  body("number").isString().notEmpty().withMessage("Number must be a number"),
  handleValidationErrors,
];
