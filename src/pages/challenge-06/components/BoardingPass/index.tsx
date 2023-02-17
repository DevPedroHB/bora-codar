import { IoAirplane } from "react-icons/io5";
import QRCode from "react-qr-code";
import { CardBoardingPass } from "../CardBoardingPass";
import { BoardingPassContainer, Column, Row } from "./styles";

interface IBoardingPass {
  modelTwo?: boolean;
}

export function BoardingPass({ modelTwo }: IBoardingPass) {
  return (
    <BoardingPassContainer>
      <CardBoardingPass modelTwo={modelTwo ? "top" : undefined}>
        <Row spaceBottom>
          <Column>
            <span>Voo</span>
            <p>RS995</p>
          </Column>
          <Column right>
            <span>Data</span>
            <p>23/05/2023</p>
          </Column>
        </Row>
        <Row>
          <Column>
            <span>São Paulo, Brasil</span>
          </Column>
          <Column right>
            <span>São Francisco, EUA</span>
          </Column>
        </Row>
        <Row>
          <Column>
            <h2>GRU</h2>
          </Column>
          <Column>
            <IoAirplane size={24} />
          </Column>
          <Column right>
            <h2>SFO</h2>
          </Column>
        </Row>
        <Row>
          <Column textDefault>
            <p>17:00</p>
          </Column>
          <Column textDefault right>
            <p>
              04:48<sup>+1</sup>
            </p>
          </Column>
        </Row>
      </CardBoardingPass>
      <CardBoardingPass modelTwo={modelTwo ? "middle" : undefined} middle>
        <Row>
          <Column>
            <span>Passageiro</span>
            <p>Pedro Henrique</p>
          </Column>
          <Column right>
            <span>Assento</span>
            <p>28A</p>
          </Column>
        </Row>
      </CardBoardingPass>
      <CardBoardingPass modelTwo={modelTwo ? "bottom" : undefined}>
        <Row spaceBottom>
          <Column gapDiv>
            <div>
              <span>Embarque</span>
              <strong>16:15</strong>
            </div>
            <div>
              <span>Terminal</span>
              <p>2</p>
            </div>
            <div>
              <span>Portão</span>
              <p>15</p>
            </div>
          </Column>
          <Column>
            <QRCode
              value="https://bora-codar-pedrohb.netlify.app/"
              size={140}
              fgColor="#000"
            />
            <span style={{ marginTop: ".625rem" }}>Grupo de embarque: 3</span>
          </Column>
        </Row>
        <Row>
          <p>
            <strong>Atenção:</strong> o portão fecha 16:45
          </p>
        </Row>
      </CardBoardingPass>
    </BoardingPassContainer>
  );
}
