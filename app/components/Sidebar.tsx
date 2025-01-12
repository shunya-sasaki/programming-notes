"use client";
import Link from "next/link";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { languages } from "@/app/utils/languages";
import { pageIndex } from "../utils/pageIndex";

export const SideBar = () => {
  const iconClass =
    "mx-2 my-2 flex items-center space-x-2 content-center hover:text-accent-100";
  return (
    <div>
      <Link key={`link-home`} href="/" className={iconClass}>
        <FontAwesomeIcon icon={faHome} className="text-xl" />
        <div className="pt-1 align-middle text-xl">Home</div>
      </Link>
      {languages.map((language) => (
        <div key={language.pageRef} className={iconClass}>
          <Link
            href={`/pages/${language.pageRef}/${
              pageIndex[language.pageRef][0].href
            }`}
            className="hover:text-accent-100"
          >
            <div className="flex items-center space-x-2 text-xl">
              <i className={`${language.iconName} align-middle`}></i>
              <div className=" align-middle">{language.name}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
