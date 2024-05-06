import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 9123;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
