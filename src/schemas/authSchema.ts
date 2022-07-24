import joi from "joi";
import { CreateUserData } from "../services/authService.js";

export const userSchema = joi.object<CreateUserData>({
  email: joi.string().email().required(),
  password: joi.string().min(6).required()
});
