import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import schemaValidator from '../middlewares/schemaMiddleware.js';
import { userSchema } from '../schemas/authSchema.js';

const authRouter = Router();

authRouter.post("/signup", schemaValidator(userSchema), signUp);
authRouter.post("/signin", schemaValidator(userSchema), signIn);

export default authRouter;