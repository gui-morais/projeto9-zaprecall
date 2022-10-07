import styled from "styled-components";
import certo from "../assets/img/icone_certo.png";
import quase from "../assets/img/icone_quase.png";
import erro from "../assets/img/icone_erro.png";

export default function Footer({ status }) {
  const perguntasRespondidas = status.filter((value) => (value===3||value===4||value===5));
  const imagens = [];
    perguntasRespondidas.forEach((value) => {
        if (value === 3) {
          imagens.push(<img src={certo} alt="Não foi possível carregar a imagem" />)
        }
        if (value === 4) {
          imagens.push(<img src={quase} alt="Não foi possível carregar a imagem" />)
        }
        if (value === 5) {
          imagens.push(<img src={erro} alt="Não foi possível carregar a imagem" />)
        }
      })

  return (
    <FooterContainer>
      {perguntasRespondidas.length}/{status.length} CONCLUÍDOS
      <Icones>
        {imagens}
      </Icones>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 20px;
`;

const Icones = styled.div`
  display: flex;
  img {
    margin: 5px 2px;
  }
`;
