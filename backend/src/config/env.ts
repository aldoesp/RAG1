import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  PORT: z.coerce.number().int().positive().default(3000),

  GEMINI_API_KEY: z.string().optional(),

  SUPABASE_URL: z.string().url().optional().or(z.literal("")),

  SUPABASE_ANON_KEY: z.string().optional(),

  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("❌ Variables d’environnement invalides");
  console.error(result.error.flatten().fieldErrors);

  process.exit(1);
}

export const env = result.data;