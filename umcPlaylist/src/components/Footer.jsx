import styled from "styled-components";

export default function Footer() {
  return (
    <Footerbg>
      <FooterText>University Makeus Challenge</FooterText>
    </Footerbg>
  );
}

const Footerbg = styled.div`
  background-color: #353289;
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const FooterText = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;
