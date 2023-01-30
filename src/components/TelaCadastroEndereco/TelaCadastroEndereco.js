import { Form, FormContainer, Input, StyledLabel, SendButton } from "../TelaCadastro/styled"

export function TelaCadastroEndereco(props) {
    return (
        <FormContainer>
            <h1>Cadastro de Endereço </h1>
            <Form>
                <StyledLabel >
                    Endereço:
                    <Input />
                </StyledLabel>
                <StyledLabel >
                    Número da Residência:
                    <Input />
                </StyledLabel>
                <StyledLabel >
                    Telefone:
                    <Input />
                </StyledLabel>
                <StyledLabel >
                    Complemento:
                    <Input />
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
            </Form>
        </FormContainer>
    )
}