import { PageIndex } from "../interfaces/PageIndex";

interface PageIndexes {
  [key: string]: PageIndex[];
}

export const pageIndex: PageIndexes = {
  cpp: [{ title: "C++ Style Guide", href: "style-guide" }],
  cs: [{ title: "C# Style Guide", href: "style-guide" }],
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
    {
      title: "Project structure for Next.js",
      href: "structure",
    },
  ],
  tools: [{ title: "Git hooks", href: "git-hooks" }],
};
