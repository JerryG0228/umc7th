import styled from "styled-components";
import { CartIcon } from "../assets/Icon";
import { useSelector } from "react-redux";

export default function Header() {
  const { totalAmount } = useSelector((store) => store.cart);

  return (
    <Headerbg>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "50vw" }}>
        <HeaderText>Real Data UMC PlayList</HeaderText>
        <div>
          <CartIcon />
          <Amount>{totalAmount}</Amount>
        </div>
      </div>
    </Headerbg>
  );
}

const Headerbg = styled.div`
  background-color: #353289;
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
`;

const HeaderText = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;

const Amount = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  position: fixed;
  top: 1rem;
  right: 24vw;
`;
