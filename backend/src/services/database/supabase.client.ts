import { createClient } from "@supabase/supabase-js";

import { env } from "../../config/env.js";

if (!env.SUPABASE_URL) {
  throw new Error(
    "SUPABASE_URL est manquant dans le fichier .env",
  );
}

if (!env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error(
    "SUPABASE_SERVICE_ROLE_KEY est manquant dans le fichier .env",
  );
}

export const supabase = createClient(
  env.SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  },
);