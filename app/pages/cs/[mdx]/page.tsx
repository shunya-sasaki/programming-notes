import { pageIndex } from "@/utils/pageIndex";
import { PageContents } from "@/components/PageContentsSection";

export const generateStaticParams = async () => {
  const pages = pageIndex.cs.map((page) => page.href);
  return pages.map((page) => ({ mdx: page }));
};

const CsPage = async ({ params }: { params: Promise<{ mdx: string }> }) => {
  const pages = pageIndex.ts;
  const { mdx } = await params;

  return (
    <PageContents
      pages={pages}
      pageName={mdx}
      language="C#"
      languageShortName="cs"
      iconName="csharp"
    />
  );
};

export default CsPage;
