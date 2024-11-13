import Skeleton from "./Skeleton.jsx";
import Movie from "./Movie.jsx";
import styled from "styled-components";

export default function SearchResult({keyword, movies, isLoading}) {
  if (keyword && movies?.length === 0) {
    return (
      <div style={{position: "absolute", textAlign: "center", width: "80vw", marginTop: "50px"}}>
        <NoneData>해당하는 검색어 {keyword}에</NoneData>
        <NoneData>해당하는 데이터가 없습니다.</NoneData>
      </div>
    )
  }

  return (
    <div>
      {isLoading ? <Skeleton/> :
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
      }
    </div>
  );
}

const NoneData = styled.div`
    color: white;
    font-size: 3vh;
    font-weight: 700;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1vw;
    margin-top: 1vh;
`;