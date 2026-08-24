import path from "node:path";

import type { DocumentLoader } from "./document-loader.types.js";
import { TextDocumentLoader } from "./loaders/text.loader.js";

export class DocumentLoaderRegistry {
  private readonly loaders: DocumentLoader[];

  public constructor(loaders: DocumentLoader[]) {
    this.loaders = loaders;
  }

  public findLoader(filePath: string): DocumentLoader | null {
    const extension = path.extname(filePath).toLowerCase();

    return (
      this.loaders.find((loader) =>
        loader.supports(extension),
      ) ?? null
    );
  }

  public getSupportedExtensions(): string[] {
    return [
      ...new Set(
        this.loaders.flatMap((loader) => [
          ...loader.supportedExtensions,
        ]),
      ),
    ];
  }
}

export const documentLoaderRegistry =
  new DocumentLoaderRegistry([
    new TextDocumentLoader(),
  ]);