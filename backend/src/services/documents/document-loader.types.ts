export interface LoadedDocument {
  content: string;

  metadata: {
    source: string;
    fileName: string;
    extension: string;
    mimeType?: string;
    size?: number;
    pageNumber?: number;
    loaderName: string;
    [key: string]: unknown;
  };
}

export interface DocumentLoader {
  readonly name: string;
  readonly supportedExtensions: readonly string[];

  supports(extension: string): boolean;

  load(filePath: string): Promise<LoadedDocument[]>;
}