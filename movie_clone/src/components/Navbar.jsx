import {Link} from "react-router-dom";
import styled from "styled-components";
import {IoSearch} from "react-icons/io5";
import {BiSolidMoviePlay} from "react-icons/bi";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Navbar() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setUsername(res.data.email.split("@")[0]);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            const refreshRes = await axios.post(
              "http://localhost:3000/auth/token/access", {}, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
                },
              }
            );
            console.log("before accessToken: ", localStorage.getItem("accessToken"));
            console.log("after accessToken: ", refreshRes.data.accessToken);
            localStorage.setItem("accessToken", refreshRes.data.accessToken);

            const retryRes = await axios.get("http://localhost:3000/user/me", {
              headers: {
                Authorization: `Bearer ${refreshRes.data.accessToken}`,
              },
            });
            setUsername(retryRes.data.email.split("@")[0]);
          } catch (refreshError) {
            console.error("토큰 갱신 실패", refreshError);
          }
        } else {
          console.error("사용자 데이터 가져오기 실패", error);
        }
      }
    };

    fetchData();
  }, []);


  const logout = () => {
    localStorage.clear();
    setUsername("");

    console.log("로그아웃");
  }

  return (
    <>
      {/* 상단바 */}
      <TopNav>
        <div style={{display: "flex", alignItems: "center", gap: "5vh"}}>
          {username ?
            <>
              <div style={{color: "white", fontWeight: "600", marginRight: "-2vh"}}>{username}님 반갑습니다.</div>
              <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
            </> : (
              <>
                <LoginLink to="/login">로그인</LoginLink>
                <SignupLink to="/signup">회원가입</SignupLink>
              </>
            )}
        </div>
      </TopNav>

      {/* 사이드바 */}
      <LeftNav>
        {/* 상단 로고 */}
        <HomeLink to="/">YONGCHA</HomeLink>
        <div style={{display: "flex", flexDirection: "column", gap: "3vh"}}>
          {/* 찾기 */}
          <Leftbarcontent>
            <IoSearch color="white" size={18}/>
            <SearchLink to="/search">찾기</SearchLink>
          </Leftbarcontent>

          {/* 영화 */}
          <Leftbarcontent>
            <BiSolidMoviePlay color="white" size={18}/>
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

const LogoutBtn = styled.button`
    all: unset;
    padding: 1vh 1.2vh;
    border-radius: 1vh;
    color: white;
    font-size: 1rem;
    transition: opacity 0.3s;
    cursor: pointer;

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
