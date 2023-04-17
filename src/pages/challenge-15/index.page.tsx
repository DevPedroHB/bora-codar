import { pricingTables } from "@/utils";
import { NextSeo } from "next-seo";
import { PricingCard } from "./components/PricingCard";
import { Challenge15Container, Challenge15Content } from "./styles";

export default function Challenge15() {
  return (
    <>
      <NextSeo
        title="Desafio 15 | Pricing Table"
        description="Este projeto é uma aplicação web que permite aos usuários criar, personalizar e compartilhar tabelas de preços de seus produtos ou serviços."
      />
      <Challenge15Container>
        <Challenge15Content>
          {pricingTables.map((pricingTable) => (
            <PricingCard key={pricingTable.id} pricingTable={pricingTable} />
          ))}
        </Challenge15Content>
      </Challenge15Container>
    </>
  );
}
