import { DefaultCard } from "../DefaultCard";
import { CardGroup } from "./styles";

export function CardSalesByDayOfTheWeek() {
  return (
    <DefaultCard>
      <h2>Vendas por dia da semana</h2>
      <CardGroup>
        <div>
          <div>
            <small>Dias com mais vendas</small>
            <span>quarta-feira</span>
          </div>
          <div>
            <small>Dias com menos vendas</small>
            <span>domingo</span>
          </div>
        </div>
        <div>Gráfico</div>
      </CardGroup>
    </DefaultCard>
  );
}
