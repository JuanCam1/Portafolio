import { useState } from "react"

interface CarouselProps {
  images: string[]
}
const Carousel = ({ images }: CarouselProps) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
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
    <div onMouseOver={() => setIsMouseOver(true)} onMouseOut={() => setIsMouseOver(false)} className=" relative w-full border rounded max-h-[376px] h-[40vh]  overflow-hidden border-gray-300">
      <img className="w-full h-full object-cover aspect-auto" src={images[indexImage]} alt="" />

      {
        isMouseOver && (
          <>

            <button onClick={() => handleClick("preview")} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group-focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/30  ">
                <svg className="w-3 h-3 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
              </span>
            </button>
            <button onClick={() => handleClick("next")} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/30  ">
                <svg className="w-3 h-3 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
              </span>
            </button>
          </>
        )
      }
    </div>

  )
}

export default Carousel