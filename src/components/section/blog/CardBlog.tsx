import type { FC } from "react";
import { Link } from "react-router-dom";

interface BlogProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Props {
  blog: BlogProps;
}
const CardBlog: FC<Props> = ({ blog }) => {
  return (
    <Link
      to={blog.link}
      className="flex flex-col border-[0.2px] border-gray-300 dark:bg-[#242930] shadow-md rounded-md"
    >
      <div className="dark:bg-[rgb(21,24,27)] rounded-md h-40 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={blog.image}
          alt="logo"
        />
      </div>

      <div className="px-4 max-sm:px-0 py-2">
        <h2 className="pb-2 font-extrabold text-blue-400 text-xl">
          {blog.title}
        </h2>
        <p className="text-sm">{blog.description}</p>
      </div>
    </Link>
  );
};

export default CardBlog;