import {
    Form,
    FormContainer,
    Input,
    StyledLabel,
    SendButton,
    BackToLoginButton
  } from "./styled";
  
  function TelaCadastroEndereco(props) {
    return (
      <FormContainer>
        <h1>Contato e Endereço </h1>
        <Form>
          <StyledLabel htmlFor="titulo">
            Endereço:
            <Input id="titulo" />
          </StyledLabel>
          <StyledLabel htmlFor="foto">
            Numero:
            <Input id="foto" />
          </StyledLabel>
          <StyledLabel htmlFor="descricao">
            Telefone:
            <Input id="descricao" />
          </StyledLabel>
          <StyledLabel htmlFor="descricao1">
            Complemento:
            <Input id="descricao" />
          </StyledLabel>
          <SendButton onClick={props.telaFinal}>Cadastrar</SendButton>
          <BackToLoginButton onClick={props.mudarTela}>
            Já possuo um cadastro
          </BackToLoginButton>
        </Form>
      </FormContainer>
    );
  }
  
  export default TelaCadastroEndereco;