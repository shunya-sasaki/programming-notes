'use client';

import React from 'react';

import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Page } from '@/interfaces/Page';

export const PagesSection = (props: {
  pages: Array<Page>;
  setCurrentPage: React.Dispatch<string>;
}) => {
  const { pages, setCurrentPage } = props;
  return (
    <section className="w-full h-1/6 lg:h-full overflow-y-scroll lg:w-1/4 lg:pl-4 mb-2 lg:border-0 border-b-2 lg:border-b-0 lg:border-l-2 border-primary-100 ">
      <h2 className="text-xl font-bold">Pages</h2>
      {pages.map((page) => (
        <div
          key={page.href}
          className="flex items-start lg:items-center space-x-2 hover:cursor-pointer hover:text-accent-100"
          onClick={() => setCurrentPage(page.href)}
        >
          <FontAwesomeIcon icon={faFileLines} className="py-1" />
          <div className="align-top lg:align-middle">{page.title}</div>
        </div>
      ))}
    </section>
  );
};
