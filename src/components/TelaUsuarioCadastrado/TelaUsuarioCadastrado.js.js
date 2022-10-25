import { Form } from "../TelaLogin/styled";
import { Div, Titulo, BackToLoginButton } from "./styled";

function TelaUsuarioCadastrado (props){
    return (
        <Div>
        <Form>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <BackToLoginButton onClick={() => props.mudarTela(1)}>Voltar para realizar login</BackToLoginButton>
        </Form>
        </Div>
    )
}

export default TelaUsuarioCadastrado;