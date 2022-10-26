import {
    Form,
    FormContainer,
    Input,
    StyledLabel,
    SendButton,
    BackToLoginButton
  } from "./styled";
  
  export function TelaCadastroEndereco(props) {
    return (
      <FormContainer>
        <h1>Cadastro de Endereço:</h1>
        <Form>
          <StyledLabel htmlfor="endereco">
            Endereço:
            <Input />
          </StyledLabel>
          <StyledLabel htmlfor="numeroresidencia">
            Número:
            <Input />
          </StyledLabel>
          <StyledLabel htmlfor="telefone">
            Telefone:
            <Input />
          </StyledLabel>
          <StyledLabel htmlfor="complemento">
            Complemento:
            <Input />
          </StyledLabel>
          <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
          <BackToLoginButton
            onClick={() => props.mudarTela(2)}
          ></BackToLoginButton>
        </Form>
      </FormContainer>
    );
  }
  
  // export default TelaCadastroEndereco
  