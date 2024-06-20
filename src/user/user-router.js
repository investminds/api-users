import { Router } from "express";
import userController from "./user-controller.js";

const registerRouter = Router();
const userRouter = Router();

registerRouter.post("/register", userController.register);
registerRouter.post("/login", userController.login);

export { registerRouter, userRouter };
