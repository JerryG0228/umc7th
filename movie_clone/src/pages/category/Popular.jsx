import {useState} from "react";
import Movie from "../../components/Movie";
import styled from "styled-components";
import useCustomFetch from "../../hooks/useCustomFetch.js";

export default function Popular() {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
    setPage(page + 1);
  };
  const prevPage = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
    if (page === 1) return;
    setPage(page - 1);
  };

  const {movies, isLoading, isError} = useCustomFetch(`/movie/popular?language=ko-KR`, page);
  if (isLoading) return <div><h1 style={{color: "white"}}>로딩중...</h1></div>;
  if (isError) return <div><h1 style={{color: "tomato"}}>에러!!!</h1></div>;

  return (
    <div>
      <GridContainer>
        {movies.map((movie, idx) => (
          <Movie
            key={idx}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            id={movie.id}
          />
        ))}
      </GridContainer>
      <PageBox>
        <PageButton onClick={prevPage}>이전</PageButton>
        <PageText>{page}</PageText>
        <PageButton onClick={nextPage}>다음</PageButton>
      </PageBox>
    </div>
  );
}

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1vw;
`;

const PageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    gap: 1vw;
    margin: 5vh 0;
`;

const PageButton = styled.button`
    all: unset;
    background-color: tomato;
    color: white;
    padding: 1vh 2vh;
    border-radius: 5vh;
`;

const PageText = styled.div`
    font-size: 1.5rem;
    color: white;
    font-weight: "700";
`;
