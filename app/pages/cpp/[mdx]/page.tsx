import { pageIndex } from "@/app/utils/pageIndex";
import { PageContents } from "@/app/components/PageContentsSection";

export const generateStaticParams = async () => {
  const pages = pageIndex.cpp.map((page) => page.href);
  return pages.map((page) => ({ mdx: page }));
};

const CppPage = async ({ params }: { params: Promise<{ mdx: string }> }) => {
  const pages = pageIndex.ts;
  const { mdx } = await params;

  return (
    <PageContents
      pages={pages}
      pageName={mdx}
      language="C++"
      languageShortName="cpp"
      iconName="cplusplus"
    />
  );
};

export default CppPage;
