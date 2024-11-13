import {axiosInstance} from "../../apis/axios_instance.js";

export const useGetMovies = async ({category, page}) => {
  const {data} = await axiosInstance(`/movie/${category}?language=ko-KR&page=${page}`);

  return data;
}