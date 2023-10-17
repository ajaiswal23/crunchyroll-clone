import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useAnime = (id?: string) => {
  const { data, error, isLoading } = useSwr(
    id ? `/api/anime/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useAnime;
