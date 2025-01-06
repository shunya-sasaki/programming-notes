import fs from "fs";
import path from "path";

export const getSubDirectories = (tagetDirNameFromRoot: string) => {
  const mode = process.env.NODE_ENV;
  let targetDir = "";
  if (mode === "development" || mode === "test") {
    targetDir = path.join(process.cwd(), "app", tagetDirNameFromRoot);
  } else {
    targetDir = path.join(__dirname, tagetDirNameFromRoot);
  }
  const entries = fs.readdirSync(targetDir, {
    withFileTypes: true,
  });
  const pages = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return pages;
};
