import { NextSeo } from "next-seo";
import { ProductImg } from "./components/ProductImg";
import ProductInfo from "./components/ProductInfo";
import { Challenge02Container } from "./styles";

export default function Challenge02() {
  return (
    <>
      <NextSeo
        title="Desafio 02 | Card de Produto"
        description="Este projeto consiste em uma página que permite ao usuário visualizar um produto em 360 graus, utilizando tecnologias de renderização de imagens e animações para criar uma experiência imersiva."
      />
      <Challenge02Container>
        <ProductImg />
        <ProductInfo />
      </Challenge02Container>
    </>
  );
}
