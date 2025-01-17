import { dataBlogs } from "../../data/dataBlogs";
import { Blog } from "./Blog";

const Blogs = () => {
	return (
		<div className="gap-4 grid grid-cols-2 mt-4">
			{dataBlogs.map((blog) => (
				<Blog key={blog.title} blog={blog} />
			))}
		</div>
	);
};

export default Blogs;
