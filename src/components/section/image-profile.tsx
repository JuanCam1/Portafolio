import logoProfile from "@/assets/images/perfiImagen.webp";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ImageProfile = () => {
	return (
		<article className="flex justify-center mt-9 mb-5 p-2 w-full">
			<Avatar className="size-[130px]">
				<AvatarImage src={logoProfile} className="object-cover" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</article>
	);
};
export default ImageProfile;
