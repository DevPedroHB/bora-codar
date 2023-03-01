import { formatMoneyWithSuffix, getPercentage } from "@/utils";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { DefaultCard } from "../DefaultCard";
import { ClosedSalesSVG, MonthlyGoalSVG } from "../GradientSVG";
import { CardBody, CardFooter, FooterInfo } from "./styles";

interface ICardCircularGraph {
  title: string;
  type: 1 | 2;
  waiting: number;
  reached: number;
}

export function CardCircularGraph({
  title,
  type,
  reached,
  waiting,
}: ICardCircularGraph) {
  return (
    <DefaultCard alignCenter>
      <h2>{title}</h2>
      <CardBody>
        <CircularProgressbarWithChildren
          strokeWidth={13}
          value={getPercentage(reached, waiting)}
          styles={{
            trail: {
              stroke: "#D9D9D9",
              strokeLinecap: "butt",
              opacity: 0.1,
            },
            path: {
              stroke: `url(#${
                type === 1 ? "ClosedSalesSVG" : "MonthlyGoalSVG"
              })`,
            },
          }}
        >
          <div className="bar-info">
            <strong>{getPercentage(reached, waiting)}%</strong>
            <span>alcançada</span>
            {type === 1 ? <ClosedSalesSVG /> : <MonthlyGoalSVG />}
          </div>
        </CircularProgressbarWithChildren>
      </CardBody>
      <CardFooter>
        <FooterInfo>
          <span>
            <div />
            Esperado
          </span>
          <span>{type === 1 ? waiting : formatMoneyWithSuffix(waiting)}</span>
        </FooterInfo>
        <FooterInfo variant={type === 1 ? "closedSales" : "monthlyGoal"}>
          <span>
            <div />
            Alcançado
          </span>
          <span>{type === 1 ? reached : formatMoneyWithSuffix(reached)}</span>
        </FooterInfo>
      </CardFooter>
    </DefaultCard>
  );
}
