import createMDX from '@next/mdx';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import type { NextConfig } from 'next';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeMermaid from 'rehype-mermaid';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
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

const options = {
  theme: 'monokai',
  transformers: [
    transformerCopyButton({
      jsx: true,
      visibility: 'always',
      feedbackDuration: 1000,
    }),
  ],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkDirective, admonitionRemarkPlugin],
    rehypePlugins: [
      [rehypePrettyCode, options],
      rehypeMermaid,
      rehypeAutolinkHeadings,
      rehypeSlug,
    ],
  },
});

export default withMDX(nextConfig);
