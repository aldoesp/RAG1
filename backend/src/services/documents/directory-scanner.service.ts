import { readdir } from "node:fs/promises";
import path from "node:path";

export async function scanDirectory(
  directoryPath: string,
): Promise<string[]> {
  const entries = await readdir(directoryPath, {
    withFileTypes: true,
  });

  const filePaths: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(
      directoryPath,
      entry.name,
    );

    if (entry.isFile()) {
      filePaths.push(entryPath);
    }
  }

  return filePaths.sort();
}