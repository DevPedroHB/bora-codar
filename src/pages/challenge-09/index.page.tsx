import { apiChallenge09 } from "@/lib/axios";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { CurrencyConverterForm } from "./components/CurrencyConverterForm";
import { ExchangeRateChart } from "./components/ExchangeRateChart";
import { Challenge09Container, QuoteCard } from "./styles";

interface IChallenge09 {
  codes: Array<Array<string>>;
}

interface IResponseCodes {
  result: string;
  documentation: string;
  terms_of_use: string;
  supported_codes: Array<Array<string>>;
}

export default function Challenge09({ codes }: IChallenge09) {
  return (
    <>
      <NextSeo
        title="Desafio 09 | Conversor de Moedas"
        description="Este projeto é um conversor de moedas que permite a conversão entre diferentes tipos de moedas. Além disso, ele apresenta um gráfico que mostra as cotações entre as moedas selecionadas nos últimos 12 meses."
      />
      <Challenge09Container>
        <QuoteCard>
          <CurrencyConverterForm codes={codes} />
          <ExchangeRateChart />
        </QuoteCard>
      </Challenge09Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await apiChallenge09.get<IResponseCodes>("/codes");

  return {
    props: {
      codes: response.data.supported_codes,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
