import { Link } from "react-router-dom";

interface OptionProps {
  pathname: string;
  path: string;
  text: string;
}
const Option = ({ pathname, path, text }: OptionProps) => {
  return (
    <li className="flex-1 hover:bg-gray-900/10 hover:dark:bg-gray-700/70 cursor-pointer">
      <Link
        to={path}
        aria-current="page"
        className={` ${pathname === `${path}` &&
          "active text-black dark:text-white border-b-4 border-solid border-blue-300"
          } inline-block p-4  rounded-t-lg  `}
      >
        {text}
      </Link>
    </li>
  );
};

export default Option;