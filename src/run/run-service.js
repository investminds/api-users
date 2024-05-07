import client from "../config/openai.js";

const create = async (thread_id, assistant_id) => {
  const stream = await client.beta.threads.runs.create(thread_id, {
    assistant_id,
    stream: true,
  });
  for await (const event of stream) {
    if (event.event === "thread.message.completed")
      console.log("Response from assistant: ", event.data.content);
  }
};

export default { create };
