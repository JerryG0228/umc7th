import styled from "styled-components";
import {useState} from "react";
import useCustomFetch from "../hooks/useCustomFetch.js";
import {useNavigate, useSearchParams} from "react-router-dom";
import SearchResult from "../components/SearchResult.jsx";

export default function Search() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({
    mk: "",
  });

  const mk = searchParams.get("mk");

  const handleOnChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleSearch = () => {
    if (mk === keyword) return;
    navigate(`/search?mk=${keyword}`);
  }

  const handleSearchKeyboard = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  const {movies, isLoading, isError} = useCustomFetch(`search/movie?language=ko-KR&query=${mk}`, 1);

  if (isError) return <div><h1 style={{color: "tomato"}}>에러!!!</h1></div>;


  return (
    <>
      <div style={{display: "flex", alignItems: "center"}}>
        <Searchbar placeholder="검색어를 입력해주세요" type={"text"} onChange={handleOnChange} onKeyDown={handleSearchKeyboard}/>
        <SearchBtn type={"submit"} value={"검색"} onClick={handleSearch}/>
      </div>

      <SearchResult keyword={mk} movies={movies} isLoading={isLoading}/>
    </>
  )
};

const Searchbar = styled.input`
    flex: 10;
    box-sizing: border-box;
    padding: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
`

const SearchBtn = styled.input`
    all: unset;
    box-sizing: border-box;
    flex: 1;
    background-color: #BB3D57;
    color: white;
    text-align: center;
    outline: none;
    padding: 15px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
`