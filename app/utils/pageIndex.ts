import { PageIndex } from "../interfaces/PageIndex";

interface PageIndexes {
  [key: string]: PageIndex[];
}

export const pageIndex: PageIndexes = {
  cpp: [{ title: "File and directory structure for CMake", href: "cmake" }],
  cs: [{ title: "Style guide for C# project", href: "style-guide" }],
  python: [
    {
      title: "Sphinx with markdown",
      href: "sphinx-markdown",
    },
  ],
  ts: [
    {
      title: "How to use markdown in Next.js",
      href: "mdx",
    },
    {
      title: "How to use devicon in Next.js",
      href: "devicon",
    },
  ],
};
