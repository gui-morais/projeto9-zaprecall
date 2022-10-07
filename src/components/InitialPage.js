import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function InitialPage() {
  return (
    <Page>
      <img src={logo} alt="Não foi possível carregar a imagem..." />
      <p>ZapRecall</p>
      <Link to={'/mainpage'}><button>Iniciar Recall!</button></Link>
    </Page>
  );
}

const Page = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  p {
    font-family: "Righteous";
    font-size: 40px;
    color: white;
    margin: 20px;
  }
  button {
    width: 245px;
    height: 55px;
    background: white;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #d70900;
    font-family: "Recursive";
    font-size: 20px;
    cursor: pointer;
  }
`;
