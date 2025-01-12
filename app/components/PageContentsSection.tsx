"use client";
import { PageIndex } from "@/app/interfaces/PageIndex";
import { useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { PagesSection } from "@/app/components/PagesSection";
import MdxLayout from "./MdxLayout";
import { JSX } from "react";

export const PageContents = (props: {
  pages: Array<PageIndex>;
  pageName: string;
  language: string;
  languageShortName: string;
  iconName: string;
}) => {
  const { pages, pageName, language, languageShortName, iconName } = props;
  const [currentPage, setCurrentPage] = useState(pageName);
  const [currentPageJsx, setCurrentPageJsx] = useState<JSX.Element>(<></>);

  useEffect(() => {
    const NewPage = dynamic(
      () => import(`@/app/pages/${languageShortName}/${currentPage}.mdx`)
    );
    setCurrentPageJsx(<NewPage />);
  }, [currentPage, pageName]);

  return (
    <div className="lg:flex lg:flex-row-reverse h-full overflow-y-hidden pb-4">
      <PagesSection pages={pages} setCurrentPage={setCurrentPage} />
      <section className="w-full lg:w-3/4 h-5/6 lg:h-full pr-4 overflow-y-scroll">
        <h1 className="my-4 text-3xl font-bold flex content-center space-x-2">
          <div>
            <i className={`devicon-${iconName}-plain align-middle`}></i>
          </div>
          <div className="align-middle">{language}</div>
        </h1>
        <MdxLayout>{currentPageJsx}</MdxLayout>
      </section>
    </div>
  );
};
