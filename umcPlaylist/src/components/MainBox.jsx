import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AlbumBox from "./AlbumBox";
import { open } from "../modal/modalSlice";
import { clearCart } from "../redux/cartSlice";

export default function MainBox() {
  const dispatch = useDispatch();
  const { totalAmount, cartItems, totalPrice } = useSelector((store) => store.cart);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "8rem", marginBottom: "7rem" }}>
      <TitleText>당신이 선택한 음반</TitleText>

      {totalAmount === 0 ? (
        <EmptyText>고객님이 좋아하는 음반을 담아보세요~!</EmptyText>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {cartItems.map((item) => {
              return <AlbumBox key={item.id} id={item.id} {...item} />;
            })}
          </div>

          <Line />

          <div style={{ display: "flex", justifyContent: "space-between", width: "45vw", marginTop: "1rem" }}>
            <div style={{ fontSize: "1.2rem", fontWeight: "700" }}>총 가격</div>
            <div style={{ fontSize: "1.2rem", fontWeight: "700" }}>₩ {totalPrice}원</div>
          </div>

          <ClearBtn onClick={() => dispatch(clearCart())}>장바구니 초기화</ClearBtn>
        </div>
      )}
    </div>
  );
}

const TitleText = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Line = styled.div`
  width: 45vw;
  height: 1px;
  background-color: #aeaeae;
`;

const ClearBtn = styled.button`
  border: none;
  border-radius: 0.8rem;
  border: 1px solid tomato;
  cursor: pointer;
  margin-top: 1rem;
  width: 10vw;
  height: 3rem;
  background-color: transparent;
  color: tomato;
  font-weight: 700;
  font-size: 0.8rem;
`;

const EmptyText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3069db;
`;