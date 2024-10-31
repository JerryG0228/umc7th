import styled from "styled-components";

export default function Castpeople({profile_path, name, character}) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap:"0.5rem"}}>
      <Imgbox>
        {profile_path && <CastImg src={baseUrl + profile_path} alt="castImg"/>}
      </Imgbox>
      <Name>{name}</Name>
      <Character>{character}</Character>
    </div>
  );
}

const Imgbox = styled.div`
    width: 15vh;
    height: 15vh;
    border-radius: 100%;
    overflow: hidden;
    background-color: grey;
    border: 1px solid white;
`
const CastImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Name = styled.div`
    color: white;
    font-size: 1rem;
    font-weight: 500;
`
const Character = styled.div`
    color: grey;
    font-size: 0.8rem;
    font-weight: 500;
`