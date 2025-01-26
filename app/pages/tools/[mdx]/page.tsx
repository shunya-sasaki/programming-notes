import { tools } from "@/app/utils/tools";
import { PageContents } from "@/app/components/PageContentsSection";
import { Page } from "@/app/utils/tools";

export const generateStaticParams = async () => {
  const pareRef = "git";
  let targetPages = Array<Page>();
  for (const tool of tools) {
    if (tool.pageRef === pareRef) {
      targetPages = tool.pages;
    }
  }
  const pages = targetPages.map((page) => page.href);
  return pages.map((page) => ({ mdx: page }));
};

const GitPage = async ({ params }: { params: Promise<{ mdx: string }> }) => {
  const pages = tools[0].pages;
  const { mdx } = await params;

  return (
    <PageContents
      pages={pages}
      pageName={mdx}
      language="Git"
      languageShortName="tools"
      iconName="git"
    />
  );
};

export default GitPage;
