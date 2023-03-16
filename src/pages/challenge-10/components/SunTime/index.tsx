import climaSunChart from "@/assets/images/clima-sun-chart.svg";
import climaSunTime from "@/assets/images/clima-sun-time.svg";
import { formatRandomNumberInMinutes, getPercentage } from "@/utils";
import Image from "next/image";
import {
  Chart,
  SunChart,
  SunChartWrapper,
  SunTimeContainer,
  Time,
} from "./styles";

export function SunTime() {
  const time = 1748;
  const timePercentage = getPercentage(time, 2400);
  const timeFormatted = formatRandomNumberInMinutes(String(time), ":", 2);

  return (
    <SunTimeContainer>
      <h2>
        <Image src={climaSunTime} alt="Ícone de um sol com um relógio dentro" />
        Horário do sol
      </h2>
      <SunChartWrapper>
        <SunChart css={{ "--pos-x": `${timePercentage}` }}>
          <Chart>
            <Image
              src={climaSunChart}
              alt="Imagem de um gráfico semi circulo com traços"
            />
          </Chart>
          <time>{timeFormatted}</time>
        </SunChart>
      </SunChartWrapper>
      <Time>
        <time>06:00</time>
        <time>18:52</time>
      </Time>
    </SunTimeContainer>
  );
}
