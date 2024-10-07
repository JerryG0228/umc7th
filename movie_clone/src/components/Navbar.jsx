import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { BiSolidMoviePlay } from "react-icons/bi";

export default function Navbar() {
  return (
    <>
      {/* 상단바 */}
      <TopNav>
        <div style={{ display: "flex", alignItems: "center", gap: "5vh" }}>
          <LoginLink to="/login">로그인</LoginLink>
          <SignupLink to="/signup">회원가입</SignupLink>
        </div>
      </TopNav>

      {/* 사이드바 */}
      <LeftNav>
        {/* 상단 로고 */}
        <HomeLink to="/">YONGCHA</HomeLink>
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
          {/* 찾기 */}
          <Leftbarcontent>
            <IoSearch color="white" size={18} />
            <SearchLink to="/search">찾기</SearchLink>
          </Leftbarcontent>

          {/* 영화 */}
          <Leftbarcontent>
            <BiSolidMoviePlay color="white" size={18} />
            <MovieLink to="/moviecategory">영화</MovieLink>
          </Leftbarcontent>
        </div>
      </LeftNav>
    </>
  );
}

const TopNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 2.2vh 5vh;
  padding-left: 1.7vh;
  background-color: #131517;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 1.9rem;
  font-weight: 600;
  color: #cb305b;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const SignupLink = styled(HomeLink)`
  padding: 1vh 1.2vh;
  background-color: #e64567;
  border-radius: 1vh;
  color: white;
  font-size: 1rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const LeftNav = styled.nav`
  width: 6vw;
  height: 100%;
  background-color: #131517;
  padding: 2.5vh 5vh;
  padding-left: 3vh;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: fixed;
  top: 0;
  gap: 3vh;
`;

const Leftbarcontent = styled.div`
  display: flex;
  align-items: center;
  gap: 2vh;
`;

const SearchLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const MovieLink = styled(SearchLink)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
