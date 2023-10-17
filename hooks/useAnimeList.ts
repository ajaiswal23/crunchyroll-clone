import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useAnimeList= () => {
  const { data, error, isLoading } = useSwr("/api/anime", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
  };
};

export default useAnimeList;
