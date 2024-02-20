import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import {
  spyXFamily,
  spyXFamilyBg,
  onePiece,
  onePieceBg,
  blackClover,
  blackCloverBg,
} from "./Carousel";

const Hero = () => {
  const slidesBg = [
    {
      logo: spyXFamily,
      bg: spyXFamilyBg,
      text: "World peace is at stake and secret agent Twilight must undergo his most difficult mission yet—pretend to be a family man. Posing as a ... ",
    },
    {
      logo: onePiece,
      bg: onePieceBg,
      text: "Monkey. D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for ...",
    },

    {
      logo: blackClover,
      bg: blackCloverBg,
      text: "In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with ...",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentSlide === slidesBg.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slidesBg.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  return (
    <section
      style={{ backgroundImage: `url(${slidesBg[currentSlide].bg.src})` }}
      className=" w-full h-full bg-cover bg-no-repeat bg-right-top z-50 "
    >
      <div className="h-[40vh] md:h-[60vh] lg:h-[75vh]  w-full pt-2 md:pt-2 lg:pt-6">
        <div className="flex h-full w-full  items-center justify-between gap-0 md:gap-4">
          {/* left arrow */}
          <div
            onClick={prevSlide}
            className="text-xl rounded-full p-2 ml-2 sm:ml-4 lg:ml-16 bg-white/80 cursor-pointer"
          >
            <BsChevronCompactLeft className=" sm:text-2xl md:text-5xl text-black" />
          </div>

          <div className="flex md:flex-col md:gap-10 h-5/6 items-start justify-start max-md:justify-center max-md:items-end">
            <Image
              height={150}
              width={250}
              src={slidesBg[currentSlide].logo}
              className=""
              alt="Anime Background"
            />
            <p className=" max-md:hidden text-2xl font-bold bg-black/50 p-4 rounded-3xl text-white w-full lg:w-3/4 xl:w-1/2 ">
              {slidesBg[currentSlide].text}
            </p>
          </div>
          {/* right arrow */}
          <div
            onClick={nextSlide}
            className="text-xl rounded-full p-2 mr-4 lg:mr-16 bg-white/80 cursor-pointer"
          >
            <BsChevronCompactRight className="text-2xl md:text-5xl text-black" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
