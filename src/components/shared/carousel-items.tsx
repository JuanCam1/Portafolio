import { useId, type FC } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
	items: string[];
}
const CarouselItems: FC<Props> = ({ items }) => {
	const id = useId();
	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 7000,
				}),
			]}
			className="w-full h-[300px]"
		>
			<CarouselContent className="h-[300px]">
				{items.map((item, idx) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<CarouselItem key={id + idx}>
						<img src={item} alt="item" className="w-full h-full object-cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="left-5" />
			<CarouselNext className="right-5" />
		</Carousel>
	);
};

export default CarouselItems;
