import { geminiClient } from "./gemini.client.js";

const GENERATION_MODEL = "gemini-3.6-flash";

export async function generateText(prompt: string): Promise<string> {
  const cleanedPrompt = prompt.trim();

  if (!cleanedPrompt) {
    throw new Error("Le prompt ne peut pas être vide.");
  }

  const interaction = await geminiClient.interactions.create({
    model: GENERATION_MODEL,
    input: cleanedPrompt,
  });

  const answer = interaction.output_text?.trim();

  if (!answer) {
    throw new Error("Gemini n’a retourné aucune réponse textuelle.");
  }

  return answer;
}

export const geminiConfig = {
  generationModel: GENERATION_MODEL,
} as const;