import DashboardEmojiSmileImg from "@/assets/images/dashboard-emoji-smile.png";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CardDashboard } from "./components/CardDashboard";
import { ClosedSalesSVG, MonthlyGoalSVG } from "./components/GradientSVG";
import {
  CardBody,
  CardFooter,
  CardGroup,
  CardTitle,
  Challenge08Container,
  Challenge08Content,
  FooterInfo,
} from "./styles";

export default function Challenge08() {
  return (
    <>
      <NextSeo
        title="Desafio 08 | Dashboard"
        description="Este projeto é um dashboard que permite acompanhar o desempenho de vendas de uma empresa. Ele apresenta diversas informações relevantes para o acompanhamento do negócio, tais como o NPS mensal, a progressbar circular com vendas fechadas, a meta mensal e um gráfico com vendas por dia da semana com o melhor e o pior dia."
      />
      <Challenge08Container>
        <Challenge08Content>
          <CardGroup>
            <CardDashboard alignCenter>
              <CardTitle>NPS geral</CardTitle>
              <CardBody>
                <Image src={DashboardEmojiSmileImg} alt="Emoji sorrindo" />
                <p>Excelente!</p>
              </CardBody>
              <CardFooter>
                <FooterInfo>
                  <span>NPS Score</span>
                  <small>75</small>
                </FooterInfo>
              </CardFooter>
            </CardDashboard>
            <CardDashboard alignCenter>
              <CardTitle>Vendas fechadas</CardTitle>
              <CardBody>
                <CircularProgressbarWithChildren
                  strokeWidth={13}
                  value={70}
                  styles={{
                    trail: {
                      stroke: "#D9D9D9",
                      strokeLinecap: "butt",
                      opacity: 0.1,
                    },
                    path: {
                      stroke: "url(#ClosedSalesSVG)",
                    },
                  }}
                >
                  <div className="bar-info">
                    <strong>70%</strong>
                    <span>alcançada</span>
                    <ClosedSalesSVG />
                  </div>
                </CircularProgressbarWithChildren>
              </CardBody>
              <CardFooter variant="closedSales">
                <FooterInfo>
                  <span>
                    <div />
                    Esperado
                  </span>
                  <small>100</small>
                </FooterInfo>
                <FooterInfo>
                  <span>
                    <div />
                    Alcançado
                  </span>
                  <small>70</small>
                </FooterInfo>
              </CardFooter>
            </CardDashboard>
            <CardDashboard alignCenter>
              <CardTitle>Meta mensal</CardTitle>
              <CardBody>
                <CircularProgressbarWithChildren
                  strokeWidth={13}
                  value={90}
                  styles={{
                    trail: {
                      stroke: "#D9D9D9",
                      strokeLinecap: "butt",
                      opacity: 0.1,
                    },
                    path: {
                      stroke: "url(#MonthlyGoalSVG)",
                    },
                  }}
                >
                  <div className="bar-info">
                    <strong>90%</strong>
                    <span>alcançada</span>
                    <MonthlyGoalSVG />
                  </div>
                </CircularProgressbarWithChildren>
              </CardBody>
              <CardFooter variant="monthlyGoal">
                <FooterInfo>
                  <span>
                    <div />
                    Esperado
                  </span>
                  <small>R$ 70K</small>
                </FooterInfo>
                <FooterInfo>
                  <span>
                    <div />
                    Alcançado
                  </span>
                  <small>R$ 63K</small>
                </FooterInfo>
              </CardFooter>
            </CardDashboard>
          </CardGroup>
          <CardDashboard>
            <CardTitle alignStart>Vendas por dia da semana</CardTitle>
            <CardGroup>
              <div>asd</div>
              <div>Gráfico</div>
            </CardGroup>
          </CardDashboard>
        </Challenge08Content>
      </Challenge08Container>
    </>
  );
}
