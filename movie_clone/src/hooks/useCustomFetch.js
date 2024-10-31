import {useEffect, useState} from "react";
import {axiosInstance} from "../apis/axios_instance.js";

const useCustomFetch = (url, page) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getDatas = async () => {
      try {
        const movieData = await axiosInstance.get(`${url}&page=${page}`);
        setMovies(movieData.data.results);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getDatas();
  }, [url, page]);

  return {movies, isLoading, isError}
}

export default useCustomFetch;