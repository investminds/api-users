import raceService from "./race-service.js";

const startNewRace = async (req, res) => {
  try {
    const { assistantId, content } = req.body;
    await raceService.startNewRace(assistantId, content);
    return res.status(201).send({ message: "Created!" });
  } catch (error) {
    return res.status(400).send(error);
  }
};

const sendRacePillar = async (req, res) => {
  try {
    const { threadId, assistantId, content } = req.body;
    await raceService.sendRacePillar(threadId, assistantId, content);
    res.status(201).send({ message: "Sent!" });
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default { startNewRace, sendRacePillar };
