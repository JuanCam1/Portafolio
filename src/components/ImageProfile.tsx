import logoProfile from "../assets/images/pixelJuan.svg";

export const ImageProfile = () => {
  return (
    <article className="w-full p-2 mt-9 mb-5 flex justify-center">
      <div
        className="size-[130px] rounded-full overflow-hidden
      bg-white border-4 border-solid
      dark:border-blue-300 border-black flex justify-center items-center"
      >
        <img
          className="w-full h-full object-contain transition duration-300 ease-in-out hover:scale-110"
          src={logoProfile}
          alt="foto Juan"
        />
      </div>
    </article>
  );
};
