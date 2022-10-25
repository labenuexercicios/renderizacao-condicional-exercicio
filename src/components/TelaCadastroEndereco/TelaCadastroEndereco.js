import { Input, StyledLabel, SendButton, Form, FormContainer, BackToLoginButton } from "./styled"

function CadastroEndereco(props) {
    return (
        <FormContainer>
            <h1>Endereço </h1>
            <Form>
                <StyledLabel>
                    Endereço:
                    <Input />
                </StyledLabel>

                <StyledLabel >
                    Número da residencia:
                    <Input />
                </StyledLabel>

                <StyledLabel >
                    Número de telefone:
                    <Input />
                </StyledLabel>

                <StyledLabel>
                    Complemento:
                    <Input />
                </StyledLabel>

                <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
                <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton>            </Form>
        </FormContainer>
    )
}

export default CadastroEndereco;