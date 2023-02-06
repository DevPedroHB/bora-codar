import { NextSeo } from "next-seo";
import { ProductImg } from "./components/ProductImg";
import ProductInfo from "./components/ProductInfo";
import { Challenge02Container } from "./styles";

export default function Challenge02() {
  return (
    <>
      <NextSeo
        title="Desafio 02 | Card de Produto"
        description="A proposta desse desafio é fazer uma página de um produto sendo possível visualizar o produto 360º graus."
      />
      <Challenge02Container>
        <ProductImg />
        <ProductInfo />
      </Challenge02Container>
    </>
  );
}
