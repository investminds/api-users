import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import assistantRouter from "./assistant/assistant-router.js";
import raceRouter from "./race/race-router.js";
import { registerRouter } from "./user/user-router.js";
import facebookRouter from "./facebook/facebook-router.js";

const app = express();
const port = process.env.PORT || 9123;

app.use(cors());
app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/assistant", assistantRouter);
app.use("/api/race", raceRouter);

app.use("/api/user", registerRouter);
app.use("/api/facebook", facebookRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
