import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeHighlight from 'rehype-highlight';
import rehypeMermaid from 'rehype-mermaid';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';

import { admonitionRemarkPlugin } from '@/plugins/admonitionRemarkPlugin';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  serverExternalPackages: ['pino'],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  basePath: process.env.NODE_ENV === 'development' ? '' : '/programming-notes',
  assetPrefix:
    process.env.NODE_ENV === 'development' ? '' : '/programming-notes',
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkDirective, admonitionRemarkPlugin],
    rehypePlugins: [rehypeCodeTitles, rehypeHighlight, rehypeMermaid],
  },
});

export default withMDX(nextConfig);
