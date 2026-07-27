import { app } from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.PORT, () => {
  console.log("==================================");
  console.log("🚀 Real RAG API démarrée");
  console.log(`🌍 URL : http://localhost:${env.PORT}`);
  console.log(`🔧 Mode : ${env.NODE_ENV}`);
  console.log("==================================");
});

function shutdown(signal: string): void {
  console.log(`\n${signal} reçu. Arrêt du serveur...`);

  server.close((error) => {
    if (error) {
      console.error("❌ Erreur pendant l’arrêt :", error);
      process.exit(1);
    }

    console.log("✅ Serveur arrêté proprement");
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));