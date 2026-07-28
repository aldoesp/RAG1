import { Router } from "express";

import { supabase } from "../services/database/supabase.client.js";

export const databaseRouter = Router();

databaseRouter.get("/test", async (_request, response) => {
  const { data, error } = await supabase
    .from("document_chunks")
    .select("id, document_name, chunk_index")
    .limit(1);

  if (error) {
    response.status(500).json({
      success: false,
      message: "Échec de la connexion à Supabase",
      error: error.message,
    });

    return;
  }

  response.status(200).json({
    success: true,
    message: "Connexion à Supabase réussie",
    data,
  });
});