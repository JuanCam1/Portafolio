import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
	images: string[];
}
const Carousel = ({ images }: CarouselProps) => {
	const [indexImage, setIndexImage] = useState(0);
	const indexMax = images.length - 1;
	const indexMin = 0;

	const handleClick = (type: string) => {
		switch (type) {
			case "preview":
				indexImage === indexMin
					? setIndexImage(indexMax)
					: setIndexImage((prev) => prev - 1);
				break;

			case "next":
				indexImage === indexMax
					? setIndexImage(indexMin)
					: setIndexImage((prev) => prev + 1);
				break;
		}
	};
	return (
		<div className="relative flex justify-center border-gray-300 border rounded w-full h-[40vh] max-h-[376px] overflow-hidden group">
			<div
				style={{ backgroundImage: `url(${images[indexImage]})` }}
				className="bg-gray-300 dark:bg-white/40 bg-cover bg-no-repeat w-full h-full duration-500"
			>
				{/* <img className="w-full h-full object-contain" src={images[indexImage]} alt="project" /> */}
			</div>

			<button
				type="button"
				onClick={() => handleClick("preview")}
				className="group-hover:block top-[50%] left-5 absolute border-gray-300 hidden bg-white/40 p-2 border rounded-full text-2xl text-white -translate-x-0 translate-y-[-50%] cursor-pointer"
			>
				<IoIosArrowBack size={14} fontWeight="bold" />
			</button>

			<button
				type="button"
				onClick={() => handleClick("next")}
				className="group-hover:block top-[50%] right-5 absolute border-gray-300 hidden bg-white/40 p-2 border rounded-full text-2xl text-white -translate-x-0 translate-y-[-50%] cursor-pointer"
			>
				<IoIosArrowForward size={14} fontWeight="bold" />
			</button>
		</div>
	);
};

export default Carousel;
