import React from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton} from "./styled";


export function TelaCadastroEndereco(props){



    return(
        <FormContainer>
        <h1>Cadastro </h1>
        <Form>
        <StyledLabel htmlFor="titulo">
          Endereço:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Número da residencia:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Telefone:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Complemento:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
      </Form>
    </FormContainer>


    )
}

// export default TelaCadastroEndereco;