import { Router } from "express";
import { z } from "zod";

import {
  generateText,
  geminiConfig,
} from "../services/ai/gemini.service.js";

export const geminiRouter = Router();

const testRequestSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(1, "Le prompt est obligatoire.")
    .max(2_000, "Le prompt est trop long pour ce test."),
});

geminiRouter.post("/test", async (request, response) => {
  try {
    const validation = testRequestSchema.safeParse(request.body);

    if (!validation.success) {
      response.status(400).json({
        success: false,
        error: "Requête invalide",
        details: validation.error.flatten().fieldErrors,
      });

      return;
    }

    const answer = await generateText(validation.data.prompt);

    response.status(200).json({
      success: true,
      message: "Connexion à Gemini réussie",
      model: geminiConfig.generationModel,
      answer,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erreur inconnue pendant l’appel à Gemini.";

    console.error("❌ Erreur Gemini :", error);

    response.status(500).json({
      success: false,
      error: message,
    });
  }
});