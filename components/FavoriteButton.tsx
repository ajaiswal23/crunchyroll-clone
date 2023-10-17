import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

interface FavoriteButtonProps {
  animeId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ animeId }) => {
  const { mutate: mutateFavorites } = useFavorites();

  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(animeId);
  }, [currentUser, animeId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { animeId } });
    } else {
      response = await axios.post("/api/favorite", { animeId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    });
    mutateFavorites();
  }, [animeId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? BsBookmarkFill : BsBookmark;

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item w-8 h-8 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  );
};

export default FavoriteButton;
