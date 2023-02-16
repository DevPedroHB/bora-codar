import { carnavalBlocks } from "@/utils";
import { NextSeo } from "next-seo";
import { CarnavalBlockCard } from "./components/CarnavalBlockCard";
import { Hero } from "./components/Hero";
import {
  CardGroup,
  Challenge07Container,
  Content,
  ContentTitle,
  ToggleGroupItem,
  ToggleGroupRoot,
} from "./styles";

export default function Challenge07() {
  return (
    <>
      <NextSeo
        title="Desafio 07 | Blocos de Carnaval"
        description="Este projeto é uma página web onde o usuário pode buscar por blocos de carnaval, incluindo informações como data, hora e localização. Ele foi desenvolvido para ajudar os usuários a encontrar e participar de blocos de carnaval."
      />
      <Challenge07Container>
        <Hero />
        <Content>
          <ContentTitle>
            <h2>Blocos recomendados</h2>
            <ToggleGroupRoot type="single" defaultValue="lista">
              <ToggleGroupItem value="lista">Lista</ToggleGroupItem>
              <ToggleGroupItem value="mapa">Mapa</ToggleGroupItem>
            </ToggleGroupRoot>
          </ContentTitle>
          <CardGroup>
            {carnavalBlocks.map((carnavalBlock) => (
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
