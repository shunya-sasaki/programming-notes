import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import remarkDirective from "remark-directive";
import { admonitionRemarkPlugin } from "@/app/plugins/admonitionRemarkPlugin";
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkDirective, admonitionRemarkPlugin],
    rehypePlugins: [rehypeCodeTitles, rehypeHighlight],
  },
});

export default withMDX(nextConfig);
