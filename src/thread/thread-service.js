import client from "../config/openai.js";

const create = async () => {
  return await client.beta.threads.create();
};

const createThreadAndRun = async (assistant_id, content) => {
  const stream = await client.beta.threads.createAndRun({
    assistant_id,
    thread: {
      messages: [{ role: "user", content }],
    },
    stream: true,
  });

  for await (const event of stream) {
    if (event.event === "thread.message.completed")
      console.log("Response from assistant: ", event.data.content);
  }
};

const createMessage = async (thread_id, content) => {
  return await client.beta.threads.messages.create(thread_id, {
    role: "user",
    content,
  });
};
export default { create, createThreadAndRun, createMessage };
