import { AnimeInterface } from "@/types";
import AnimeCard from "./AnimeCard";
import { isEmpty } from "lodash";

interface AnimeListProps {
  data: AnimeInterface[];
  title: string;
}

const AnimeList: React.FC<AnimeListProps> = ({ data, title }) => {
  // console.log(data[0]);
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 md:py-12">
      <div>
        <p className="text-white text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 pb-6">
          {title}
        </p>
        {/*  */}
        <div
          className="grid gap-y-40 sm:gap-y-56 gap-x-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 xl:grid-cols-5 2xl:grid-cols-6"
        >
          {data.map((anime) => (
            <AnimeCard key={anime.id} data={anime} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
