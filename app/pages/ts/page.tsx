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
    <div className="flex h-full overflow-y-hidden pb-4">
      <section className="w-3/4 pr-4 overflow-y-scroll">
        <h1 className="my-4 text-3xl font-bold flex content-center space-x-2">
          <div>
            <i className="devicon-typescript-plain align-middle"></i>
          </div>
          <div className="align-middle">TypeScript</div>
        </h1>
        <MdxLayout>{currentPageJsx}</MdxLayout>
      </section>
      <section className="w-1/4 pl-4 border-l-2 border-primary-100 ">
        <h2 className="text-xl font-bold">Contents</h2>
        {pages.map((page) => (
          <div
            key={page.ref}
            className="flex items-center space-x-2 hover:cursor-pointer hover:text-accent-100"
            onClick={() => setCurrentPage(page)}
          >
            <FontAwesomeIcon icon={faFileLines} />
            <div>{page.title}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TsPage;
