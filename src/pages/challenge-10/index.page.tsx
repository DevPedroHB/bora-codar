import { NextSeo } from "next-seo";
import { AirQuality } from "./components/AirQuality";
import { SunTime } from "./components/SunTime";
import { TemperatureNow } from "./components/TemperatureNow";
import { WeekWeather } from "./components/WeekWeather";
import {
  Challenge10Container,
  Challenge10Content,
  ContentColumn,
  ContentRow,
} from "./styles";

export default function Challenge10() {
  return (
    <>
      <NextSeo
        title="Desafio 10 | Página de Clima"
        description="Este projeto é uma página de clima que exibe informações sobre a temperatura, qualidade do ar, horário do sol e previsão do tempo para uma determinada localidade."
      />
      <Challenge10Container>
        <Challenge10Content>
          <TemperatureNow />
          <ContentRow>
            <ContentColumn>
              <AirQuality />
              <SunTime />
            </ContentColumn>
            <WeekWeather />
          </ContentRow>
        </Challenge10Content>
      </Challenge10Container>
    </>
  );
}
