import assistantService from "./assistant-service.js";

const create = async (_, res) => {
  try {
    const assistant = await assistantService.create();
    return res.status(201).send(assistant);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAll = async (_, res) => {
  try {
    console.log("chegou no get all")
    const assistants = await assistantService.getAll();
    console.log("assistants", assistants);
    return res.status(201).send(assistants);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const remove = async (req, res) => {
  try {
    const assistantId = req.params.id;
    if (!assistantId)
      return res.status(404).send({ message: "Parameter not found." });
    await assistantService.remove(assistantId);
    res.status(201).send({ message: "Assistant removed." });
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default { create, getAll, remove };
