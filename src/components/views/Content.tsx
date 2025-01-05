import { About } from "./About";
import { ImageProfile } from "../ImageProfile";
import { Options } from "../shared/options/Options";

export const Content = () => {
	return (
		<section className="w-full flex flex-col items-center">
			<div className="max-w-[800px] w-full flex flex-col items-center border border-gray-300">
				<ImageProfile />

				<div className="max-w-[610px] w-full p-4 flex flex-col gap-10">
					<About />
					<Options />
				</div>
			</div>
		</section>
	);
};
