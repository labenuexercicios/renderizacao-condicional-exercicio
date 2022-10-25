import React from "react";
import { Form, FormContainer, Input, SendButton, StyledLabel, BackToLoginButton} from "./styled";

function Endereço(props){
    console.log(props)
    return (
    <FormContainer>
        <h1>Cadastre seu endereço:</h1>
        <Form>
        <StyledLabel>Endereço:
            <Input />
        </StyledLabel>
        <StyledLabel>Nº da casa:
            <Input />
        </StyledLabel>
        <StyledLabel>Nº de Telefone:
            <Input />
        </StyledLabel>
        <StyledLabel>Complemento:
            <Input />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Cadastrar Endereço:</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo cadastro</BackToLoginButton>
        
        </Form>
    </FormContainer>
    )
}

export default Endereço