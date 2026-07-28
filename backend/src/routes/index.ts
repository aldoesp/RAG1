import { Router } from "express";

import { databaseRouter } from "./database.routes.js";
import { healthRouter } from "./health.routes.js";
import { geminiRouter } from "./gemini.routes.js";

export const apiRouter = Router();

apiRouter.use("/health", healthRouter);
apiRouter.use("/database", databaseRouter);
apiRouter.use("/gemini", geminiRouter);