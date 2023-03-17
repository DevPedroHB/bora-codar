import { NextSeo } from "next-seo";
import { Form } from "./components/Form";
import { Challenge11Container, SectionForm, SectionImage } from "./styles";

export default function Challenge11() {
  return (
    <>
      <NextSeo
        title="Desafio 11 | Tela de Login"
        description="Este é um projeto de Tela de Login que tem como objetivo oferecer uma interface simples e fácil de usar para autenticação de usuários em sistemas web. A tela permite que o usuário insira seu e-mail e senha e, em seguida, faça login no sistema."
      />
      <Challenge11Container>
        <SectionForm>
          <Form />
        </SectionForm>
        <SectionImage />
      </Challenge11Container>
    </>
  );
}
