import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

export interface LoadedDocument {
  content: string;
  metadata: {
    source: string;
    fileName: string;
    extension: string;
    size: number;
  };
}

const DOCUMENTS_DIRECTORY = path.resolve(
  process.cwd(),
  "data",
  "documents",
);

const SUPPORTED_EXTENSIONS = new Set([".txt", ".md"]);

export async function loadDocumentsFromDirectory(): Promise<
  LoadedDocument[]
> {
  const fileNames = await readdir(DOCUMENTS_DIRECTORY);

  const documents: LoadedDocument[] = [];

  for (const fileName of fileNames) {
    const filePath = path.join(DOCUMENTS_DIRECTORY, fileName);
    const fileStats = await stat(filePath);

    if (!fileStats.isFile()) {
      continue;
    }

    const extension = path.extname(fileName).toLowerCase();

    if (!SUPPORTED_EXTENSIONS.has(extension)) {
      console.warn(`Fichier ignoré : ${fileName}`);
      continue;
    }

    const content = await readFile(filePath, "utf-8");

    if (!content.trim()) {
      console.warn(`Fichier vide ignoré : ${fileName}`);
      continue;
    }

    documents.push({
      content,
      metadata: {
        source: filePath,
        fileName,
        extension,
        size: fileStats.size,
      },
    });
  }

  return documents;
}