import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const MovieDetailbox = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    top: -0.5vh;
    padding: 1vh 1vw;
    width: 80%;
    height: 29vh;
    overflow-y: auto;
    z-index: 99;
    border-radius: 2vh;
    background-color: rgba(0, 0, 0, 0.8);

    &::-webkit-scrollbar {
        width: 0.2rem;
        height: 1vh;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(33, 33, 33, 0.8);
        border-radius: 10px;
    }
`;

const MovieContainer = styled.div`
    width: 10vw;
    display: flex;
    flex-direction: column;
    position: relative;

    &:hover ${MovieDetailbox} {
        display: flex;
    }
`;

const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vh;
    margin-top: 0.5rem;
`;

const MovieName = styled.div`
    color: white;
    font-weight: 500;
    font-size: 1.3rem;
    cursor: pointer;
`;

const MovieDate = styled.div`
    color: white;
    font-size: 0.9rem;
`;

const MovieImage = styled.img`
    width: 100%;
    height: 30vh;
    border-radius: 1.5vh;
    object-fit: cover;
`;

export default function Movie({poster_path, title, release_date, overview, id}) {
  const navigate = useNavigate();
  const BaseUrl = "https://image.tmdb.org/t/p/w1280/";

  const moveInfo = () => {
    navigate(`/movie/${id}`)
  }

  return (
    <div>
      <MovieContainer>
        <MovieImage src={BaseUrl + poster_path} alt="movie"/>
        <MovieDetailbox>
          <div style={{color: "white", fontSize: "1rem", fontWeight: "700", marginBottom: "0.5vh"}}>{title}</div>
          <div style={{color: "white", fontSize: "0.8rem"}}>{overview}</div>
        </MovieDetailbox>
        <MovieInfo>
          <MovieName onClick={moveInfo}>{title}</MovieName>
          <MovieDate>{release_date}</MovieDate>
        </MovieInfo>
      </MovieContainer>
    </div>
  );
}
