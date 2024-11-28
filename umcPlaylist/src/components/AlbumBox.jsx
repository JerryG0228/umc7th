import styled from "styled-components";
import { ChevronUp, ChevronDown } from "../assets/Icon";
import { useDispatch } from "react-redux";
import { increase, decrease } from "../redux/cartSlice";

export default function AlbumBox({ id, title, singer, price, img, amount }) {
  const dispatch = useDispatch();

  const increaseBtn = () => {
    dispatch(increase(id));
  };

  const decreaseBtn = () => {
    dispatch(decrease(id));
  };

  return (
    <AlbumContainer>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "1rem" }}>
        <div>
          <AlbumImg src={img} alt="AlbumImg" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <AlbumInfo>
            {title} | {singer}
          </AlbumInfo>
          <AlbumInfo style={{ color: "#868C98" }}>₩ {price}</AlbumInfo>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
        <Button onClick={increaseBtn}>
          <ChevronUp />
        </Button>
        <div>{amount}</div>
        <Button onClick={decreaseBtn}>
          <ChevronDown />
        </Button>
      </div>
    </AlbumContainer>
  );
}

const AlbumContainer = styled.div`
  display: flex;
  width: 45vw;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
`;

const AlbumImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

const AlbumInfo = styled.div`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
`;
