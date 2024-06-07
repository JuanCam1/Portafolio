import { useState } from "react"
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";

interface CarouselProps {
  images: string[]
}
const Carousel = ({ images }: CarouselProps) => {
  const [indexImage, setIndexImage] = useState(0);
  const indexMax = images.length - 1;
  const indexMin = 0;

  const handleClick = (type: string) => {
    switch (type) {
      case "preview":
        indexImage === indexMin ? setIndexImage(indexMax) : setIndexImage(prev => prev - 1)
        break;

      case "next":
        indexImage === indexMax ? setIndexImage(indexMin) : setIndexImage(prev => prev + 1)
        break;
    }
  }
  return (
    <div className=" relative group w-full border rounded max-h-[376px] h-[40vh] overflow-hidden border-gray-300 flex justify-center">
      <div style={{ backgroundImage: `url(${images[indexImage]})` }}
        className='w-full h-full bg-cover bg-no-repeat duration-500 bg-gray-300 dark:bg-white/40'>
        {/* <img className="w-full h-full object-contain" src={images[indexImage]} alt="project" /> */}
      </div>


      <div onClick={() => handleClick("preview")} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/40 text-white cursor-pointer border border-gray-300 '>
        <IoIosArrowBack  size={14} fontWeight="bold" />
      </div>
      
      <div  onClick={() => handleClick("next")} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/40 text-white cursor-pointer border border-gray-300 '>
        <IoIosArrowForward size={14} fontWeight="bold" />
      </div>


    </div>

  )
}

export default Carousel