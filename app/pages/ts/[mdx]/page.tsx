import { PageContents } from '@/components/PageContentsSection';
import { pageIndex } from '@/utils/pageIndex';

export const generateStaticParams = async () => {
  const pages = pageIndex.ts.map((page) => page.href);
  return pages.map((page) => ({ mdx: page }));
};

const TsPage = async ({ params }: { params: Promise<{ mdx: string }> }) => {
  const pages = pageIndex.ts;
  const { mdx } = await params;

  return (
    <PageContents
      pages={pages}
      pageName={mdx}
      language="TypeScript"
      languageShortName="ts"
      iconName="typescript"
    />
  );
};

export default TsPage;
