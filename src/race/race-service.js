import threadService from "../thread/thread-service.js";
import runService from "../run/run-service.js";

const startNewRace = async (assistant_id, content) => {
    console.log("Starting a new Race...")
  await threadService.createThreadAndRun(assistant_id, content);
};

const sendRacePillar = async (thread_id, assistant_id, content) => {
  console.log("Sending race pillar...");
  const response = await threadService.createMessage(thread_id, content);
  console.log(`Message sent to thread ${response.thread_id}`);
  await continueRace(thread_id, assistant_id);
};

const continueRace = async (thread_id, assistant_id) => {
  console.log("Creating a new race...");
  await runService.create(thread_id, assistant_id);
  console.log("Race finished...");
};

export default { startNewRace, sendRacePillar, continueRace };
