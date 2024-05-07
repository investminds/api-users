import client from "../config/openai.js";
import { instructions, name, model } from "../config/assistant.js";

const create = async () => {
  return await client.beta.assistants.create({
    instructions,
    name,
    model,
  });
};

const getAll = async () => {
  const res = await client.beta.assistants.list({
    order: "desc",
    limit: "20",
  });
  return res.data;
};

const remove = async (id) => {
  await client.beta.assistants.del(id);
};

export default { create, getAll, remove };
