import {useParams} from "react-router-dom";
import useInfoFetch from "../hooks/useInfoFetch.js";
import Castpeople from "../components/Castpeople.jsx";
import styled from "styled-components";

export default function Info() {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const {id} = useParams()
  const {details, credits, isLoading, isError} = useInfoFetch(id)

  console.log(details, credits);

  if (isLoading) return <div><h1 style={{color: "white"}}>로딩중...</h1></div>
  if (isError) return <div><h1 style={{color: "tomato"}}>에러!!!</h1></div>

  return (
    <div>
      <TopContainer>
        <div>
          <TopImg src={baseUrl + details.poster_path} alt="movieImg"/>
        </div>
        <Detailbox>
          <div style={{color: "white", fontSize: "2.5rem", fontWeight: "700"}}>{details.title}</div>
          <div style={{margin: "1vh 0"}}>
            <div style={{
              color: "white",
              fontSize: "1.2rem"
            }}>평균 {details.vote_average ? details.vote_average.toFixed(1) : ""}</div>
            <div style={{
              color: "white",
              fontSize: "1.2rem"
            }}>{details.release_date ? details.release_date.slice(0, 4) : ""}</div>
            <div style={{color: "white", fontSize: "1.2rem"}}>{details.runtime}분</div>
          </div>
          <div style={{
            color: "white",
            fontSize: "1.5rem",
            marginBottom: "1.5vh",
            fontStyle: "italic"
          }}>{details.tagline}</div>
          <div style={{color: "white", fontSize: "1rem", lineHeight:"1.2rem"}}>{details.overview}</div>
        </Detailbox>
      </TopContainer>

      <div style={{display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "3rem"}}>
        {(credits?.cast || []).map((cast, idx) => (
          <Castpeople key={idx} profile_path={cast.profile_path} name={cast.name} character={cast.character}/>
        ))}

        {(credits?.crew || []).map((crew, idx) => (
          <Castpeople key={idx} profile_path={crew.profile_path} name={crew.name} character={crew.job}/>
        ))}
      </div>
    </div>
  );
}

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 5vh;
`
const TopImg = styled.img`
    width: 100%;
    height: 50vh;
    border-radius: 1.5vh;
    object-fit: cover;
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%);
`
const Detailbox = styled.div`
    position: absolute;
    margin-top: 20vh;
    margin-left: 1vw;
    width: 30rem;
`