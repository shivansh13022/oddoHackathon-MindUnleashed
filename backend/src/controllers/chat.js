import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const generationConfig = {
  maxOutputTokens: 200,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};

async function getResponse(req, res) {
  try {
    // Extracting prompt from the request body
    const { prompt } = req.body;

    // Ensure prompt is provided
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Your existing logic to get the response from the generative model
    const model = genAI.getGenerativeModel(
      { model: "gemini-pro" },
      generationConfig
    );
    const generatedResponse = await model.generateContent(prompt);
    const responseText = await generatedResponse.response.text();

    // Sending the generated text back to the client
    res.status(200).json({ generatedText: responseText });
  } catch (error) {
    console.error("Error in getResponse:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
}

export { getResponse };
