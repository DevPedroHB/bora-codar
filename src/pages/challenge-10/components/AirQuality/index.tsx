import climaLeaf from "@/assets/images/clima-leaf.svg";
import Image from "next/image";
import { AirQualityContainer, Info, InfoNumber } from "./styles";

export function AirQuality() {
  return (
    <AirQualityContainer>
      <h2>
        <Image src={climaLeaf} alt="Ícone de folha de árvore" />
        Qualidade do ar
      </h2>
      <div>
        <p>Boa</p>
        <p>21</p>
      </div>
      <Info>
        <InfoNumber>
          <p>12.9</p>
          <small>PM2.5</small>
        </InfoNumber>
        <InfoNumber>
          <p>12.9</p>
          <small>PM10</small>
        </InfoNumber>
        <InfoNumber>
          <p>2.1</p>
          <small>SO₂</small>
        </InfoNumber>
        <InfoNumber>
          <p>1.4</p>
          <small>NO₂</small>
        </InfoNumber>
        <InfoNumber>
          <p>21.2</p>
          <small>O₃</small>
        </InfoNumber>
        <InfoNumber>
          <p>0.7</p>
          <small>CO</small>
        </InfoNumber>
      </Info>
    </AirQualityContainer>
  );
}
