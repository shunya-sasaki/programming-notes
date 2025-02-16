'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import { JSX } from 'react';

import dynamic from 'next/dynamic';

import MdxLayout from '@/components/MdxLayout';
import { PagesSection } from '@/components/PagesSection';
import { Page } from '@/interfaces/Page';

export const PageContents = (props: {
  pages: Array<Page>;
  pageName: string;
  catRef: string;
  subCatRef: string;
  subCategory: string;
  iconName: string;
}) => {
  const {
    pages,
    pageName,
    catRef,
    subCategory,
    subCatRef: subShortName,
    iconName,
  } = props;
  const [currentPageJsx, setCurrentPageJsx] = useState<JSX.Element>(<></>);

  useEffect(() => {
    const NewPage = dynamic(
      () => import(`@/app/${catRef}/${subShortName}/${pageName}.mdx`),
    );
    setCurrentPageJsx(<NewPage />);
  }, [catRef, subShortName, pageName]);

  return (
    <div className="lg:flex lg:flex-row-reverse h-full overflow-y-hidden pb-4">
      <PagesSection
        pages={pages}
        category={catRef}
        subShortName={subShortName}
      />
      <section className="w-full lg:w-3/4 h-5/6 lg:h-full pr-4 overflow-y-scroll">
        <h1 className="my-4 text-3xl font-bold flex content-center space-x-2">
          <div>
            <i className={`${iconName} align-middle`}></i>
          </div>
          <div className="align-middle">{subCategory}</div>
        </h1>
        <MdxLayout>{currentPageJsx}</MdxLayout>
      </section>
    </div>
  );
};
