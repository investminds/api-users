import OpenAI from "openai";

const organization = process.env.OPENAI_ORGANIZATION_ID;
const project = process.env.OPENAI_PROJECT_ID;
const apiKey = process.env.OPENAI_API_KEY;

const client = new OpenAI({
  organization,
  project,
  apiKey,
});

export default client;
