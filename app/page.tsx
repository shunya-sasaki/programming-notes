import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { languages } from "./utils/languages";
import Link from "next/link";
import { pageIndex } from "./utils/pageIndex";
import { PageIndex } from "./interfaces/PageIndex";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold my-4">Languages</h1>
      <section className="lg:grid grid-cols-2 gap-4 px-4">
        {languages.map((language) => (
          <div key={language.pageRef} className="text-3xl py-2">
            <Link
              href={`/pages/${language.pageRef}`}
              className="hover:text-accent-100"
            >
              <div className="flex items-center space-x-2">
                <i className={`${language.iconName} align-middle`}></i>
                <div className=" align-middle">{language.name}</div>
              </div>
            </Link>
            <div className="p-2 text-base ">
              {pageIndex[language.pageRef].map((page: PageIndex) => (
                <Link
                  href={`/pages/${page.ref}`}
                  key={page.ref}
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
    </div>
  );
};

export default HomePage;
