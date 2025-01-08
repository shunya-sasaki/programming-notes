"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { JSX, useEffect, useState } from "react";
import { pageIndex } from "@/app/utils/pageIndex";
import dynamic from "next/dynamic";
import MdxLayout from "@/app/components/MdxLayout";

const TsPage = () => {
  const pages = pageIndex.ts;
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [currentPageJsx, setCurrentPageJsx] = useState<JSX.Element>(<></>);

  useEffect(() => {
    const NewPage = dynamic(() => import(`@/app/pages/${currentPage.ref}.mdx`));
    setCurrentPageJsx(<NewPage />);
  }, [currentPage]);

  return (
    <div className="lg:flex lg:flex-row-reverse h-full overflow-y-hidden pb-4">
      <section className="w-full h-1/6 lg:h-full lg:w-1/4 lg:pl-4 mb-2 lg:border-0 border-b-2 lg:border-b-0 lg:border-l-2 border-primary-100 ">
        <h2 className="text-xl font-bold">Pages</h2>
        {pages.map((page) => (
          <div
            key={page.ref}
            className="flex items-start lg:items-center space-x-2 hover:cursor-pointer hover:text-accent-100"
            onClick={() => setCurrentPage(page)}
          >
            <FontAwesomeIcon icon={faFileLines} className="py-1" />
            <div className="align-top lg:align-middle">{page.title}</div>
          </div>
        ))}
      </section>
      <section className="w-full h-5/6 lg:w-3/4 pr-4 overflow-y-scroll">
        <h1 className="my-4 text-3xl font-bold flex content-center space-x-2">
          <div>
            <i className="devicon-typescript-plain align-middle"></i>
          </div>
          <div className="align-middle">TypeScript</div>
        </h1>
        <MdxLayout>{currentPageJsx}</MdxLayout>
      </section>
    </div>
  );
};

export default TsPage;
