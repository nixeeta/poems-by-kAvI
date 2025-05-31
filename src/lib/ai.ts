// lib/ai.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const generatePoem = async (prompt: string): Promise<string> => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("AI generation error:", error);
    return "Oops! Something went wrong while generating the poem.";
  }
};

export const generatePrompt = async (): Promise<string> => {
  try {
    const result = await model.generateContent("Give me a poetic idea or setting to write about.");
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("AI prompt generation error:", error);
    return "Oops! Something went wrong while generating the prompt.";
  }
};
