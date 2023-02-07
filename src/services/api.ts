import { Configuration, OpenAIApi, CreateCompletionRequest,  } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generate = async (completion: CreateCompletionRequest) =>
  openai
    .createCompletion(completion, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(import.meta.env.VITE_OPENAI_API_KEY),
      },
    })
    .then(({ data }) => data);
