import { PageIndex } from "../interfaces/PageIndex";

interface PageIndexes {
  [key: string]: PageIndex[];
}

export const pageIndex: PageIndexes = {
  cpp: [],
  cs: [],
  python: [
    {
      title: "Sphinx with markdown",
      ref: "python/sphinx-markdown",
    },
  ],
  ts: [
    {
      title: "How to use markdown in Next.js",
      ref: "ts/mdx",
    },
    {
      title: "How to use devicon in Next.js",
      ref: "ts/devicon",
    },
  ],
};
