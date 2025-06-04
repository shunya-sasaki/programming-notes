import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = () => {
  return (
    <div className="h-full text-xl font-bold p-2 bg-primary dark:bg-tertiary text-white">
      <FontAwesomeIcon icon={faLaptopCode} /> Programming Notes
    </div>
  );
};
