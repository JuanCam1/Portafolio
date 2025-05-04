import { dataBlogs } from "@/data/dataBlogs";
import CardBlog from "./CardBlog";

const Blogs = () => {
	return (
		<div className="gap-4 grid grid-cols-2 mt-4">
			{dataBlogs.map((blog) => (
				<CardBlog key={blog.id} blog={blog} />
			))}
		</div>
	);
};

export default Blogs;
