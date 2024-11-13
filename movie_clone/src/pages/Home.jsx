import styled from "styled-components";
import useGetInfiniteMovies from "../hooks/queries/useGetInfiniteMovies.js";
import {useInView} from "react-intersection-observer";
import Movie from "../components/Movie.jsx";
import {useEffect} from "react";
import {DotLoader} from "react-spinners";

export default function Home() {
  const {
    data: movies,
    isLoading,
    isFetching,
    hasNextPage,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
    error,
    isError
  } = useGetInfiniteMovies("now_playing");

  const {ref, inView} = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isPending) {
    return (
      <LoaderContainer>
        <DotLoader color="#FFFFFF"/>
      </LoaderContainer>
    )
  }
  if (isError) return <div><h1 style={{color: "tomato"}}>에러!!!</h1></div>;

  return (
    <div>
      <GridContainer>
        {movies?.pages.map((page) =>
          page.results.map((movie) => (
            <Movie
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              overview={movie.overview}
              id={movie.id}
            />
          ))
        )}
      </GridContainer>
      {isFetchingNextPage &&
        <LoaderContainer>
          <DotLoader color="#FFFFFF"/>
        </LoaderContainer>}
      <div ref={ref}></div>
    </div>
  );
}

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1vw;
`;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;