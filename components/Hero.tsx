import { url } from "inspector";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Hero = () => {
  const slidesBg = [
    {
      url: "./assets/carousel/spy-x-family-bg.jpg",
      img: "./assets/carousel/spy-x-family-logo.webp",
      text: "World peace is at stake and secret agent Twilight must undergo his most difficult mission yet—pretend to be a family man. Posing as a ... ",
    },
    {
      url: "./assets/carousel/one-piece-bg.webp",
      img: "./assets/carousel/one-piece-logo.png",
      text: "Monkey. D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for ...",
    },

    {
      url: "./assets/carousel/black-clover-bg.jpg",
      img: "./assets/carousel/black-clover-logo.png",
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
      style={{ backgroundImage: `url(${slidesBg[currentSlide].url})` }}
      className=" w-full  min-h-[80vh]  bg-cover bg-no-repeat bg-top"
    >
      <div className="flex justify-center items-center w-full  pt-[10%]">
        {/* left arrow */}
        <div
          onClick={prevSlide}
          className="z-30 ml-8 mt-56 -translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 bg-white/60 cursor-pointer"
        >
          <BsChevronCompactLeft className="text-5xl text-black" />
        </div>

        <div className="mt-16 ml-8">
          <img
            src={slidesBg[currentSlide].img}
            className="h-20  mb-8"
            alt=""
          />
          <p className="text-2xl  bg-black/50 p-4 rounded-3xl text-white/80 w-1/2">
            {slidesBg[currentSlide].text}
          </p>
        </div>

        {/* right arrow */}
        <div
          onClick={nextSlide}
          className="z-30 mr-8 mt-56 -translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 bg-white/60 cursor-pointer"
        >
          <BsChevronCompactRight className="text-5xl text-black" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
