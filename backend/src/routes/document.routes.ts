import { Router } from "express";

import { loadDocumentsFromDirectory } from "../services/documents/document-loader.service.js";

export const documentRouter = Router();

documentRouter.get("/load-test", async (_request, response) => {
  try {
    const documents = await loadDocumentsFromDirectory();

    response.status(200).json({
      success: true,
      documentCount: documents.length,
      documents: documents.map((document) => ({
        fileName: document.metadata.fileName,
        extension: document.metadata.extension,
        size: document.metadata.size,
        characterCount: document.content.length,
        preview: document.content.slice(0, 150),
      })),
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erreur inconnue pendant le chargement.";

    console.error("Erreur de chargement :", error);

    response.status(500).json({
      success: false,
      error: message,
    });
  }
});