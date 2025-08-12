import { About } from "./about";
import ImageProfile from "./image-profile";
import Options from "./options/options";

const Content = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center bg-neutral-100 dark:bg-zinc-800  w-full max-lg:max-w-[800px] h-full">
        <ImageProfile />

        <div className="flex flex-col gap-10 px-4 pt-4 w-full max-lg:max-w-[610px]">
          <About />
          <Options />
        </div>
      </div>
    </section>
  );
};
export default Content;
