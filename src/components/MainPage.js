import { useState } from "react";
import styled from "styled-components";
import Cards from "./Cards";
import deck from "./Deck"
import Header from "./Header";
import Footer from "./Footer";

export default function MainPage() {
    const [status, setStatus] = useState(deck.map(() => 0))
  return (
    <ScreenContainer>
      <Header />
      <Cards status={status} setStatus={setStatus} />
      <Footer status={status} />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
