import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding-left: 12vw;
  padding-right: 2vh;
  padding-top: 2vh;
`;

export default function Rootlayout() {
  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}
