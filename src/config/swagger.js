import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Race Service",
      version: "1.0.0",
      description: "Documentação da API usando Swagger.",
    },
    components: {
      // *** Descomentar quando implementar autenticacao ***
      //   securitySchemes: {
      //     BearerAuth: {
      //       type: "http",
      //       scheme: "bearer",
      //       bearerFormat: "JWT",
      //     },
      //   },
      schemas: {
        Assistant: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description:
                "The identifier, which can be referenced in API endpoints.",
            },
            object: {
              type: "string",
              description: "The object type, which is always assistant",
            },
            created_at: {
              type: "integer",
              description:
                "The Unix timestamp (in seconds) for when the assistant was created.",
            },
            name: {
              type: "string",
              description:
                "The name of the assistant. The maximum length is 256 characters.",
            },
            description: {
              type: "string",
              description:
                "The description of the assistant. The maximum length is 512 characters.",
            },
            model: {
              type: "string",
              description:
                "ID of the model to use. You can use the List models API to see all of your available models, or see our Model overview for descriptions of them.",
            },
            instructions: {
              type: "string",
              description:
                "The system instructions that the assistant uses. The maximum length is 256,000 characters.",
            },
            tools: {
              type: "array",
              description:
                "A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types code_interpreter, file_search, or function.",
            },
            tool_resources: {
              type: "object",
              description:
                "A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the code_interpreter tool requires a list of file IDs, while the file_search tool requires a list of vector store IDs.",
            },
            metadata: {
              type: "map",
              description:
                "Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.",
            },
            temperature: {
              type: "number",
              description:
                "What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.",
            },
            top_p: {
              type: "number",
              description:
                "An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or temperature but not both.",
            },
          },
        },
      },
    },
  },
  apis: ["./src/*/*-router.js"],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
