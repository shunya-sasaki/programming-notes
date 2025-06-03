import { Category } from '@/interfaces/Category';

export const tools: Array<Category> = [
  {
    name: 'Git',
    iconName: 'devicon-git-plain',
    pageRef: 'git',
    pages: [
      {
        title: 'Git hooks',
        href: 'git-hooks',
      },
    ],
  },
  {
    name: 'MySQL',
    iconName: 'devicon-mysql-plain',
    pageRef: 'mysql',
    pages: [
      {
        title: 'MySQL Setup',
        href: 'mysql',
      },
    ],
  },
];
