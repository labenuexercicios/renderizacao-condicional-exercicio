import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastroEndereco(props) {
  
    return (
      <FormContainer >
        <h1>TelaCadastroEndereco</h1>
        <Form>
          <StyledLabel htmlFor="endereço">Endereço:
            <Input type={"text"} id="endereço"/>
          </StyledLabel>
          <StyledLabel htmlFor="residência">Nº da residência:
            <Input type={"text"} id="residência"/>
          </StyledLabel>
          <StyledLabel htmlFor="telefone">Telefone:
            <Input type={"text"} id="telefone"/>
          </StyledLabel>
          <StyledLabel htmlFor="complemento">Complemento:
            <Input type={"text"} id="complemento"/>
          </StyledLabel>
          <SendButton onClick={() => props.mudarTela(4)}>Confirmar endereço</SendButton>
          {/* <BackToLoginButton onClick={() => props.mudarTela(1)}>Voltar para realizar login</BackToLoginButton> */}
        </Form>
      </FormContainer>
    );
  }
  
  export default TelaCadastroEndereco;