import styled from "styled-components";

export const ErrorPage = () => {
  const goToHome = () => {
    window.location.href = "/";
  };

  return (
    <ErrorContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorMessage>Oops! The page you're looking for doesn't exist.</ErrorMessage>
      <HomeButton onClick={goToHome}>Go Back Home</HomeButton>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: #e2325b;
  text-align: center;
`;

const ErrorTitle = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HomeButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #6028ff; /* 조주환님의 메인 컬러 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a1fbf;
  }
`;
