import { Configuration, OpenAIApi, CreateCompletionRequest } from "openai";

const configuration = new Configuration({
  organization: "org-KcvBVdnR7VG4H1ALqYYuMEzJ",
  apiKey: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
});

const openai = new OpenAIApi(configuration);

export const generate = async (completion: CreateCompletionRequest) => openai
  .createCompletion(completion).then(({ data }) => data);
