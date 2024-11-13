import {useInfiniteQuery} from "@tanstack/react-query";
import {useGetMovies} from "./useGetMovies.js";

export default function useGetInfiniteMovies(category) {
  return useInfiniteQuery({
    queryFn: ({pageParam: page}) => useGetMovies({category, page}),
    queryKey: ["movies", category],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const lastMovie = lastPage.results.at(-1);

      return lastMovie
        ? allPages?.length + 1 : undefined;
    },
  })
}