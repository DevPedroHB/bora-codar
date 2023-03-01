import { NextSeo } from "next-seo";
import { CardCircularGraph } from "./components/CardCircularGraph";
import { CardGeneralNps } from "./components/CardGeneralNps";
import { CardSalesByDayOfTheWeek } from "./components/CardSalesByDayOfTheWeek";
import { CardGroup, Challenge08Container, Challenge08Content } from "./styles";

export default function Challenge08() {
  return (
    <>
      <NextSeo
        title="Desafio 08 | Dashboard"
        description="Este projeto é um dashboard que permite acompanhar o desempenho de vendas de uma empresa. Ele apresenta diversas informações relevantes para o acompanhamento do negócio, tais como o NPS mensal, a progressbar circular com vendas fechadas, a meta mensal e um gráfico com vendas por dia da semana com o melhor e o pior dia."
      />
      <Challenge08Container>
        <Challenge08Content>
          <CardGroup>
            <CardGeneralNps value={75} />
            <CardCircularGraph
              title="Vendas fechadas"
              type={1}
              waiting={100}
              reached={70}
            />
            <CardCircularGraph
              title="Meta mensal"
              type={2}
              waiting={70000}
              reached={63000}
            />
          </CardGroup>
          <CardSalesByDayOfTheWeek />
        </Challenge08Content>
      </Challenge08Container>
    </>
  );
}
