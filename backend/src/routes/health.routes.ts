import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_request, response) => {
  response.status(200).json({
    success: true,
    status: "healthy",
    application: "real-rag-api",
    timestamp: new Date().toISOString(),
  });
});