import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {
  return (
    <FormContainer>
      <h1>Cadastro Endereço</h1>
      <Form>
        <StyledLabel type={"text"} id="Cadastro Endereço">
          Endereço:
          <Input id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
         numero de residencia:
          <Input id="residencia" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          numero de telefone:
          <Input id="telefone" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          complemento:
          <Input id="complemento" />
        </StyledLabel>
        <SendButton onClick={()=>props.mudarTela(3)} >Cadastrar Endereço</SendButton>
        <BackToLoginButton >Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
