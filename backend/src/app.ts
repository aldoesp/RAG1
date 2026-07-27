import cors from "cors";
import express from "express";

import { apiRouter } from "./routes/index.js";

export const app = express();

app.disable("x-powered-by");

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use((_request, response) => {
  response.status(404).json({
    success: false,
    error: "Route introuvable",
  });
});