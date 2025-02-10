'use client';

import Link from 'next/link';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { languages } from '@/utils/languages';
import { tools } from '@/utils/tools';

export const SideBar = () => {
  const iconClass =
    'mx-2 my-2 flex items-center space-x-2 content-center hover:text-accent-100';
  return (
    <div>
      <Link key={`link-home`} href="/" className={iconClass}>
        <FontAwesomeIcon icon={faHome} className="text-xl" />
        <div className="pt-1 align-middle text-xl">Home</div>
      </Link>
      {languages.map((language) => (
        <div key={language.pageRef} className={iconClass}>
          <Link
            href={`/languages/${language.pageRef}/${language.pages[0].href}
            `}
            className="hover:text-accent-100"
          >
            <div className="flex items-center space-x-2 text-xl">
              <i className={`${language.iconName} align-middle`}></i>
              <div className=" align-middle">{language.name}</div>
            </div>
          </Link>
        </div>
      ))}
      {tools.map((tool, index) => (
        <Link
          key={`tools-${index}`}
          href={`/tools/${tool.pageRef}/${tool.pages[0].href}`}
          className={iconClass}
        >
          <div className="flex items-center space-x-2 text-xl">
            <i className={`${tool.iconName} align-middle`}></i>
            <div className=" align-middle">{tool.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
