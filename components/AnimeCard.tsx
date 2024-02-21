import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";

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
        <Image
          onClick={redirectToWatch}
          src={data.thumbnailUrl}
          alt={data.title}
          width={256}
          height={360}
          draggable={false}
          className="cursor-pointer object-contain rounded-t-2xl"
        />

        <div className="bg-zinc-800 p-2 lg:p-4 w-full rounded-b-2xl">
          <div>
            <p className="text-xl truncate text-green-400 font-semibold">
              <span onClick={() => openModal(data?.id)}>{data.title}</span>
            </p>
            <div className="flex flex-row gap-2 items-center">
              <p className="text-white text-[10px] lg:text-sm">
                {data.duration}
              </p>
            </div>
          </div>
          <div className="flex pt-2 items-center justify-between">
            <FavoriteButton animeId={data.id} />

            <div
              onClick={() => openModal(data?.id)}
              className="group/item w-8 h-8 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-green-400"
            >
              <FaAngleDown className="text-white text-2xl pt-1 group-hover/item:text-green-400 w-6" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
