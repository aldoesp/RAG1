import { readFile, stat } from "node:fs/promises";
import path from "node:path";

import type {
  DocumentLoader,
  LoadedDocument,
} from "../document-loader.types.js";

export class TextDocumentLoader implements DocumentLoader {
  public readonly name = "text-loader";

  public readonly supportedExtensions = [
    ".txt",
    ".md",
  ] as const;

  public supports(extension: string): boolean {
    return this.supportedExtensions.includes(
      extension.toLowerCase() as ".txt" | ".md",
    );
  }

  public async load(filePath: string): Promise<LoadedDocument[]> {
    const fileStats = await stat(filePath);

    if (!fileStats.isFile()) {
      throw new Error(`Le chemin n'est pas un fichier : ${filePath}`);
    }

    const content = await readFile(filePath, "utf-8");
    const cleanedContent = content.trim();

    if (!cleanedContent) {
      throw new Error(`Le fichier est vide : ${filePath}`);
    }

    const fileName = path.basename(filePath);
    const extension = path.extname(filePath).toLowerCase();

    return [
      {
        content: cleanedContent,
        metadata: {
          source: filePath,
          fileName,
          extension,
          size: fileStats.size,
          loaderName: this.name,
        },
      },
    ];
  }
}