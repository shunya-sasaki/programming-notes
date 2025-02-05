import { pageIndex } from "@/utils/pageIndex";
import { PageContents } from "@/components/PageContentsSection";

export const generateStaticParams = async () => {
  const pages = pageIndex.python.map((page) => page.href);
  return pages.map((page) => ({ mdx: page }));
};

const PythonPage = async ({ params }: { params: Promise<{ mdx: string }> }) => {
  const pages = pageIndex.python;
  const { mdx } = await params;

  return (
    <PageContents
      pages={pages}
      pageName={mdx}
      language="Python"
      languageShortName="python"
      iconName="python"
    />
  );
};

export default PythonPage;
