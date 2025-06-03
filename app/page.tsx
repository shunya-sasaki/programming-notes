import Link from 'next/link';

import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { languages } from '@/data/languages';
import { tools } from '@/data/tools';
import { logger } from '@/utils/logger';

const HomePage = () => {
  logger.info('Rendering Home Page');
  return (
    <div className="w-full h-full overflow-y-scroll">
      <h1 className="text-5xl font-bold my-4">Programming Notes</h1>
      <section className="px-4">
        <p>
          This document is a collection of notes on various programming
          languages, tools, and technologies.
        </p>
        <p>
          The notes are intended to be a quick reference for myself and others.
        </p>
        <p>
          You can find the source code for this document on&nbsp;
          <Link
            className=" text-middle-blue-100 hover:text-light-blue-100"
            href="https://github.com/shunya-sasaki/programming-notes"
          >
            GitHub
          </Link>
          .
        </p>
      </section>
      <h2 className="text-3xl font-bold my-4">Languages</h2>
      <section className="lg:grid grid-cols-2 gap-4 px-4">
        {languages.map((language) => (
          <div key={`lang-${language.pageRef}-first`} className="text-3xl py-2">
            <Link
              href={`/languages/${language.pageRef}/${language.pages[0].href}
              `}
              className="hover:text-accent-100"
            >
              <div className="flex items-center space-x-2">
                <i className={`${language.iconName} align-middle`}></i>
                <div className=" align-middle">{language.name}</div>
              </div>
            </Link>
            <div className="p-2 text-base ">
              {language.pages.map((page) => (
                <Link
                  href={`/languages/${language.pageRef}/${page.href}`}
                  key={page.href}
                  className="flex items-center space-x-2 hover:text-accent-100"
                >
                  <FontAwesomeIcon icon={faFileLines} />
                  <div>{page.title}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section>
        <h2 className="text-3xl font-bold my-4">Tools</h2>
        <div className="lg:grid grid-cols-2 gap-4 px-4">
          {tools.map((tool, index) => (
            <div key={`tool-${index}-first`}>
              <Link
                href={`/tools/${tool.pages[0].href}`}
                className="hover:text-accent-100"
              >
                <div className="flex items-center space-x-2 text-3xl">
                  <i className={`${tool.iconName} align-middle`}></i>
                  <div className=" align-middle">{tool.name}</div>
                </div>
              </Link>
              {tool.pages.map((page) => (
                <Link
                  href={`/tools/${tool.pageRef}/${page.href}`}
                  key={`tools-${page.href}`}
                  className="p-2 flex items-center space-x-2 hover:text-accent-100"
                >
                  <FontAwesomeIcon icon={faFileLines} />
                  <div>{page.title}</div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
