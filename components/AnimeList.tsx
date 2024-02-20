import { isEmpty } from "lodash";
import { useRef } from "react";

import { AnimeInterface } from "@/types";
import AnimeCard from "./AnimeCard";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface AnimeListProps {
  data: AnimeInterface[];
  title: string;
}

const AnimeList: React.FC<AnimeListProps> = ({ data, title }) => {
  // console.log(data[0]);
  const scroll = useRef<HTMLDivElement>(null);

  if (isEmpty(data)) {
    return null;
  }

  const handleScroll = (scrollOffset: number) => {
    const element = scroll.current;
    if (element) {
      element.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="px-4 md:px-12 mt-4 md:py-12 w-full">
      <p className="text-white text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 pb-6">
        {title}
      </p>

      <div className="flex items-center justify-end w-full gap-28 pb-4">
        <button
          className="bg-white p-2 rounded-full"
          onClick={() => handleScroll(-300)}
        >
          <FaAngleLeft size={20} />
        </button>
        <button
          className="bg-white p-2 rounded-full "
          onClick={() => handleScroll(300)}
        >
          <FaAngleRight size={20} />
        </button>
      </div>

      <div ref={scroll} className="flex overflow-x-scroll scroll-smooth pb-7 gap-5 ">
        {data.map((anime) => (
          <AnimeCard key={anime.id} data={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
