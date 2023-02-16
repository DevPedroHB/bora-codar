import { NextSeo } from "next-seo";
import { BoardingPass } from "./components/BoardingPass";
import { Challenge06Container, Challenge06Content } from "./styles";

export default function Challenge06() {
  return (
    <>
      <NextSeo
        title="Desafio 06 | Cartão de Embarque"
        description="Este projeto consiste em dois modelos de cartão de embarque para uso em aplicações de companhias aéreas e podem ser utilizados como templates para a geração de cartões de embarque personalizados."
      />
      <Challenge06Container>
        <Challenge06Content>
          <strong>Modelo 01</strong>
          <BoardingPass />
          <p>
            Qualquer problema procure o balcão de atendimento da sua companhia
            aérea
          </p>
        </Challenge06Content>
        <Challenge06Content>
          <strong>Modelo 02</strong>
          <BoardingPass modelTwo />
          <p>
            Qualquer problema procure o balcão de atendimento da sua companhia
            aérea
          </p>
        </Challenge06Content>
      </Challenge06Container>
    </>
  );
}
