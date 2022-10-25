import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import TelaCadastroEndereco from "./components/TelaCadastroEndereco/TelaCadastroEndereco";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [tela, setTela] = useState(1);

  const mudarTela = () => {
    setTela(2);
  };

  switch (tela) {
    case 1:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaLogin mudarTela={() => setTela(2)} />
        </MainContainer>
      );
    case 2:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaCadastro
            telaEndereco={() => setTela(3)}
            mudarTela={() => setTela(1)}
          />
        </MainContainer>
      );
    case 3:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaCadastroEndereco
            telaFinal={() => setTela(4)}
            mudarTela={() => setTela(1)}
          />
        </MainContainer>
      );
    case 4:
      return (
        <MainContainer>
          <GlobalStyled />
          <TelaUsuarioCadastrado />
        </MainContainer>
      );
    default:
      return (
        <MainContainer>
          <GlobalStyled />
          <h1>Algo deu errado </h1>
        </MainContainer>
      );
  }
}

export default App;
