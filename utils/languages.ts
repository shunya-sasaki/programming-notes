import { Category } from '../interfaces/Category';

export const languages: Array<Category> = [
  {
    name: 'C++',
    iconName: 'devicon-cplusplus-plain',
    pageRef: 'cpp',
    pages: [
      {
        title: 'C++ Style Guide',
        href: 'style-guide',
      },
    ],
  },
  {
    name: 'C#',
    iconName: 'devicon-csharp-plain',
    pageRef: 'cs',
    pages: [{ title: 'C# Style Guide', href: 'style-guide' }],
  },
  {
    name: 'TypeScript',
    iconName: 'devicon-typescript-plain',
    pageRef: 'ts',
    pages: [
      { title: 'Project structure', href: 'structure' },
      { title: 'Prettier plugin', href: 'prettier-sort' },
      {
        title: 'How to use markdown in Next.js',
        href: 'mdx',
      },
      {
        title: 'How to use devicon in Next.js',
        href: 'devicon',
      },
      {
        title: 'Mermaid.js on Next.js',
        href: 'mermaid',
      },
      {
        title: 'Font Awesome on Next.js',
        href: 'fontawesome',
      },
      {
        title: 'Logger with pino',
        href: 'logger-with-pino',
      },
    ],
  },
  {
    name: 'Python',
    iconName: 'devicon-python-plain',
    pageRef: 'python',
    pages: [
      {
        title: 'Sphinx with markdown',
        href: 'sphinx-markdown',
      },
    ],
  },
  {
    name: 'SQL',
    iconName: 'fa-solid fa-database',
    pageRef: 'sql',
    pages: [
      {
        title: 'Data types of database',
        href: 'data-types',
      },
    ],
  },
];
