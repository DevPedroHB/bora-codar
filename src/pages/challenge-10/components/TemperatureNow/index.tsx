import tempHumidityImg from "@/assets/images/temp-humidity.svg";
import tempRainImg from "@/assets/images/temp-rain.svg";
import tempWindImg from "@/assets/images/temp-wind.svg";
import Image from "next/image";
import { MapPin } from "phosphor-react";
import {
  Location,
  Statistics,
  Stats,
  Temp,
  TemperatureNowContainer,
  TempNumber,
} from "./styles";

export function TemperatureNow() {
  return (
    <TemperatureNowContainer>
      <Location>
        <MapPin size={20} weight="fill" color="#C2BFF4" />
        <strong>Indaiatuba, SP</strong>
      </Location>
      <Temp>
        <TempNumber>
          18
          <div>
            22° <span>16°</span>
          </div>
        </TempNumber>
        <span>°C</span>
      </Temp>
      <Statistics>
        <Stats>
          <Image src={tempWindImg} alt="Ícone de vento" />
          <div>
            <p>Vento</p>
            <h5>
              17 <span>km/h</span>
            </h5>
          </div>
        </Stats>
        <Stats>
          <Image src={tempHumidityImg} alt="Ícone de umidade" />
          <div>
            <p>Umidade</p>
            <h5>
              31 <span>%</span>
            </h5>
          </div>
        </Stats>
        <Stats>
          <Image src={tempRainImg} alt="Ícone de chuva" />
          <div>
            <p>Chuva</p>
            <h5>
              10 <span>%</span>
            </h5>
          </div>
        </Stats>
      </Statistics>
    </TemperatureNowContainer>
  );
}
