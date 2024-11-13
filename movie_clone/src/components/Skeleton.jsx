import styled, {keyframes} from "styled-components";

export default function Skeleton() {
  return (
    <GridContainer>
      {
        [...Array(17)].map((_, index) => (
          <div key={index}>
            <MovieContainer>
              <MovieImage/>
              <MovieName/>
              <MovieDate/>
            </MovieContainer>
          </div>
        ))
      }
    </GridContainer>
  );
}


const shimmer = keyframes`
    0% {
        background-color: #333;
    }
    50% {
        background-color: #444;
    }
    100% {
        background-color: #333;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1vw;
    margin-top: 1vh;
`;

const MovieContainer = styled.div`
    width: 10vw;
    height: 25vh;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MovieImage = styled.div`
    width: 100%;
    height: 30vh;
    border-radius: 1.5vh;
    animation: ${shimmer} 1.5s infinite ease-in-out;
`;

const MovieName = styled.div`
    width: 100%;
    height: 2vh;
    margin-top: 1vh;
    animation: ${shimmer} 1.5s infinite ease-in-out;
`;

const MovieDate = styled.div`
    width: 100%;
    height: 1.5vh;
    margin-top: 1vh;
    animation: ${shimmer} 1.5s infinite ease-in-out;
`;
