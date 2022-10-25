import React from 'react';
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton, Titulo } from "./styled";

function TelaCadastroEndereco (props) {
    return (
    <FormContainer>
        <Titulo>Endereço: </Titulo>
            <Form>
                <StyledLabel htmlFor="endereco">
                    Nome:
                    <Input id="endereco" />
                </StyledLabel>

                <StyledLabel htmlFor="residencia">
                    Número Residencial:
                    <Input id="residencia" />
                </StyledLabel>

                <StyledLabel htmlFor="telefone">
                    Insira Telefone:
                    <Input id="telefone" />
                </StyledLabel>

                <StyledLabel htmlFor="complemento">
                    Complemento:
                    <Input id="complemento" />
                </StyledLabel>

            <SendButton onClick={() => props.mudarTela(4)}>Finalizar Cadastro</SendButton>
            <BackToLoginButton onClick={() => props.mudarTela(2)}>Voltar</BackToLoginButton>
        </Form>
    </FormContainer>
    )
}

export default TelaCadastroEndereco;