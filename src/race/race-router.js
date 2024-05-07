import { Router } from "express";
import raceController from "./race-controller.js";
const router = Router();

router.post("/start", raceController.startNewRace);
router.post("/continue", raceController.sendRacePillar);

export default router;
