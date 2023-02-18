import { carnavalBlocks } from "@/utils";
import { NextSeo } from "next-seo";
import { useState } from "react";
import { CarnavalBlockCard } from "./components/CarnavalBlockCard";
import { Hero, SearchFormData } from "./components/Hero";
import {
  CardGroup,
  Challenge07Container,
  Content,
  ContentTitle,
  ToggleGroupItem,
  ToggleGroupRoot,
} from "./styles";

type TCarnavalBlocks = typeof carnavalBlocks;

export default function Challenge07() {
  const [blocksFiltered, setBlocksFiltered] = useState(carnavalBlocks);

  function handleFilterBlocks(data: SearchFormData) {
    const carnavalBlocksFiltered = carnavalBlocks.reduce(
      (accumulator: TCarnavalBlocks, carnavalBlock) => {
        if (
          (data.location === "Todas" ||
            carnavalBlock.location.includes(data.location)) &&
          carnavalBlock.title.toLowerCase().includes(data.title.toLowerCase())
        ) {
          accumulator.push(carnavalBlock);
        }

        return accumulator;
      },
      []
    );

    setBlocksFiltered(carnavalBlocksFiltered);
  }

  return (
    <>
      <NextSeo
        title="Desafio 07 | Blocos de Carnaval"
        description="Este projeto é uma página web onde o usuário pode buscar por blocos de carnaval, incluindo informações como data, hora e localização. Ele foi desenvolvido para ajudar os usuários a encontrar e participar de blocos de carnaval."
      />
      <Challenge07Container>
        <Hero handleFilterBlocks={handleFilterBlocks} />
        <Content>
          <ContentTitle>
            <h2>Blocos recomendados</h2>
            <ToggleGroupRoot type="single" defaultValue="lista">
              <ToggleGroupItem value="lista">Lista</ToggleGroupItem>
              <ToggleGroupItem value="mapa">Mapa</ToggleGroupItem>
            </ToggleGroupRoot>
          </ContentTitle>
          <CardGroup>
            {blocksFiltered.map((carnavalBlock) => (
              <CarnavalBlockCard
                key={carnavalBlock.id}
                carnavalBlock={carnavalBlock}
              />
            ))}
          </CardGroup>
        </Content>
      </Challenge07Container>
    </>
  );
}
