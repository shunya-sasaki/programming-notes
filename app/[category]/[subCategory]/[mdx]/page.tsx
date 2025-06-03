import { PageContents } from '@/components/PageContents';
import { languages } from '@/data/languages';
import { tools } from '@/data/tools';
import { findCategoryByPageRef } from '@/utils/getCategoryFromList';

export const generateStaticParams = async () => {
  const languagePages = languages.map((language) => language.pages).flat();
  const toolPages = tools.map((tool) => tool.pages).flat();
  const pages = [...languagePages, ...toolPages];
  const numLanguages = languagePages.length;
  const numTools = toolPages.length;
  const languageSubs = languages
    .map((language) => Array(language.pages.length).fill(language.pageRef))
    .flat();
  const toolSubs = tools
    .map((tool) => Array(tool.pages.length).fill(tool.pageRef))
    .flat();
  const subCategories = [...languageSubs, ...toolSubs];
  const categories = [
    ...Array(numLanguages).fill('languages'),
    ...Array(numTools).fill('tools'),
  ];

  const pageParams = pages.map((page, index) => ({
    category: categories[index],
    subCategory: subCategories[index],
    mdx: page.href,
  }));
  return pageParams;
};

const MdxPage = async ({
  params,
}: {
  params: Promise<{ category: string; subCategory: string; mdx: string }>;
}) => {
  const { category, subCategory, mdx } = await params;

  let subCatObj;
  if (category === 'languages') {
    subCatObj = findCategoryByPageRef(subCategory, languages);
  } else {
    subCatObj = findCategoryByPageRef(subCategory, tools);
  }

  if (subCatObj !== null) {
    return (
      <PageContents
        pages={subCatObj.pages}
        pageName={mdx}
        catRef={category}
        subCatRef={subCategory}
        subCategory={subCatObj.name}
        iconName={subCatObj.iconName}
      />
    );
  } else {
    return <></>;
  }
};

export default MdxPage;
