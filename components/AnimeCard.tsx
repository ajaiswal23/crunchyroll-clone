import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { FaAngleDown } from "react-icons/fa6";

import { AnimeInterface } from "@/types";
import FavoriteButton from "./FavoriteButton";
import useInfoModalStore from "@/hooks/useInfoModalStore";

interface AnimeCardProps {
  data: AnimeInterface;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModalStore();

  const redirectToWatch = useCallback(
    () => router.push(`/watch/${data.id}`),
    [router, data.id]
  );

  return (
    <div className="group bg-zinc-900">
      <div className="cursor-pointer w-64 h-full group/button">
        <img
          onClick={redirectToWatch}
          src={data.thumbnailUrl}
          alt="Anime"
          draggable={false}
          className="cursor-pointer object-contain"
        />

        <div className="bg-zinc-800 p-2 lg:p-4 w-full rounded-b-2xl">
          <div className="flex pt-2 ">
            
            <FavoriteButton animeId={data.id} />

            <div
              onClick={() => openModal(data?.id)}
              className="cursor-pointer  group/item w-8 h-8 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-green-400"
            >
              <FaAngleDown className="text-white text-2xl pt-1 group-hover/item:text-green-400 w-6" />
            </div>
          </div>
          <p className="sm:text-lg max-md:text-center text-green-400 font-semibold pt-4">
            <span onClick={() => openModal(data?.id)}>{data.title}</span>
          </p>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
