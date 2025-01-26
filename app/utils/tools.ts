export interface Page {
  title: string;
  href: string;
}

interface Category {
  name: string;
  iconName: string;
  pageRef: string;
  pages: Array<Page>;
}

export const tools: Array<Category> = [
  {
    name: "Git",
    iconName: "devicon-git-plain",
    pageRef: "git",
    pages: [
      {
        title: "Git hooks",
        href: "git-hooks",
      },
    ],
  },
];
