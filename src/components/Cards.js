import deck from "./Deck";
import setaPlay from "../assets/img/seta_play.png";
import setaVirar from "../assets/img/seta_virar.png";
import certo from "../assets/img/icone_certo.png";
import quase from "../assets/img/icone_quase.png";
import erro from "../assets/img/icone_erro.png";
import styled from "styled-components";

export default function Cards({ status, setStatus }) {
  function mudaStatus(valor, i) {
    const novoArray = [...status];
    novoArray[i] = valor;
    setStatus(novoArray);
  }

  function rendPergunta(value, i) {
    if (value === 0) {
      return (
        <PerguntaFechada key={i} resposta={0}>
          <p>Pergunta {i + 1}</p>
          <img
            src={setaPlay}
            onClick={() => mudaStatus(1, i)}
            alt="Não foi possível carregar a imagem"
          />
        </PerguntaFechada>
      );
    }
    if (value === 1) {
      return (
        <PerguntaAberta key={i}>
          <p>{deck[i].Q}</p>
          <img
            src={setaVirar}
            onClick={() => mudaStatus(2, i)}
            alt="Não foi possível carregar a imagem"
          />
        </PerguntaAberta>
      );
    }
    if (value === 2) {
      return (
        <PerguntaAberta key={i}>
          <p>{deck[i].R}</p>
          <Botoes>
            <Botao background="#FF3030" onClick={() => mudaStatus(5,i)}>Não lembrei</Botao>
            <Botao background="#FF922E" onClick={() => mudaStatus(4,i)}>Quase não lembrei</Botao>
            <Botao background="#2FBE34" onClick={() => mudaStatus(3,i)}>Zap</Botao>
          </Botoes>
        </PerguntaAberta>
      );
    } 
    if(value === 3) {
      return(
        <PerguntaFechada key={i} resposta={value}>
        <p>Pergunta {i + 1}</p>
        <img src={certo} alt="Não foi possível carregar a imagem" />
        </PerguntaFechada>
      )
    }
    if(value === 4) {
      return(
        <PerguntaFechada key={i} resposta={value}>
        <p>Pergunta {i + 1}</p>
        <img src={quase} alt="Não foi possível carregar a imagem" />
        </PerguntaFechada>
      )
    }
    if(value === 5) {
      return(
        <PerguntaFechada key={i} resposta={value}>
        <p>Pergunta {i + 1}</p>
        <img src={erro} alt="Não foi possível carregar a imagem" />
        </PerguntaFechada>
      )
    }
  }
  return status.map((value, i) => rendPergunta(value, i));
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => {
      switch (props.resposta) {
              case 3:
                return "#2FBE34";
              case 4:
                return "#FF922E";
              case 5:
                return "#FF3030";
              default:
                return "#333333";
            }
    }};
    text-decoration: ${props => {
      switch (props.resposta) {
              case 3:
                return "line-through";
              case 4:
                return "line-through";
              case 5:
                return "line-through";
              default:
                return "normal";
            }
    }}
  }
  img {
    cursor: pointer;
  }
`;

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  & > img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

const Botoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Botao = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${(props) => props.background};
  border-radius: 5px;
  border: 1px solid ${(props) => props.background};
  padding: 5px;
  cursor: pointer;
`;

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/
