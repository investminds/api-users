import { Router } from "express";
import facebookController from "./facebook-controller.js";

const router = Router();

router.post("/login", facebookController.login);

export default router;
