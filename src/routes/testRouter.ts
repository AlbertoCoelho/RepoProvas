import { Router } from "express";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";
import * as controller from "../controllers/testController.js";

const testRouter = Router();

testRouter.get("/tests", ensureAuthenticatedMiddleware, controller.find);

export default testRouter;