import {useEffect, useState} from "react";
import {axiosInstance} from "../apis/axios_instance.js";

const useInfoFetch = (id) => {
  const [details, setDetails] = useState([]);
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getDatas = async () => {
      try {
        const movieData = await axiosInstance.get(`/movie/${id}?language=ko-KR`);
        const creditData = await axiosInstance.get(`/movie/${id}/credits?language=ko-KR`);
        setDetails(movieData.data);
        setCredits(creditData.data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getDatas();
  }, []);

  return {details, credits, isLoading, isError}
}

export default useInfoFetch;