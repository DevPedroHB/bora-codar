import dashboardIconTriangleDownImg from "@/assets/images/dashboard-icon-triangle-down.png";
import dashboardIconTriangleUpImg from "@/assets/images/dashboard-icon-triangle-up.png";
import Image from "next/image";
import { DefaultCard } from "../DefaultCard";
import { CardGroup, CardInfo, Graphic, GraphicBar, MoreSales } from "./styles";

export function CardSalesByDayOfTheWeek() {
  return (
    <DefaultCard>
      <h2>Vendas por dia da semana</h2>
      <CardGroup>
        <CardInfo>
          <MoreSales>
            <small>
              <Image
                src={dashboardIconTriangleUpImg}
                alt="Ícone de triangulo verde apontado para cima."
              />
              Dias com mais vendas
            </small>
            <span>quarta-feira</span>
          </MoreSales>
          <MoreSales>
            <small>
              <Image
                src={dashboardIconTriangleDownImg}
                alt="Ícone de triangulo verde apontado para baixo."
              />
              Dias com menos vendas
            </small>
            <span>domingo</span>
          </MoreSales>
        </CardInfo>
        <Graphic>
          <GraphicBar css={{ "--height": "2.4375rem" }}>
            <div />
            <span>dom</span>
          </GraphicBar>
          <GraphicBar css={{ "--height": "7.1875rem" }}>
            <div />
            <span>seg</span>
          </GraphicBar>
          <GraphicBar css={{ "--height": "4.75rem" }}>
            <div />
            <span>ter</span>
          </GraphicBar>
          <GraphicBar css={{ "--height": "9.9375rem" }}>
            <div />
            <span>qua</span>
          </GraphicBar>
          <GraphicBar css={{ "--height": "8.0625rem" }}>
            <div />
            <span>qui</span>
          </GraphicBar>
          <GraphicBar css={{ "--height": "7.5rem" }}>
            <div />
            <span>sex</span>
          </GraphicBar>
          <GraphicBar css={{ "--height": "4.3125rem" }}>
            <div />
            <span>sab</span>
          </GraphicBar>
        </Graphic>
      </CardGroup>
    </DefaultCard>
  );
}
