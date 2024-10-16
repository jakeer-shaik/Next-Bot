import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.API_KEY,
});

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const result = await streamText({
      model: groq("llama3-8b-8192"),
      messages,
    });
    return result.toAIStreamResponse();
  } catch (error) {
    console.error("Error in POST request:", error);
    return new Response("An error occurred", { status: 500 });
  }
}
