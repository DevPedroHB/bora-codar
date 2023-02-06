import { NextSeo } from "next-seo";
import { CircleNotch, List } from "phosphor-react";
import { useState } from "react";
import { Button } from "./components/Button";
import { ButtonGroup, Challenge03Container, Content, Header } from "./styles";

export default function Challenge03() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function handleDisable() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDisabled(true);
    }, 5000); // 5 segundos

    setTimeout(() => {
      setDisabled(false);
    }, 10000); // 10 segundos
  }

  return (
    <>
      <NextSeo
        title="Desafio 03 | Botões e Cursores"
        description="A proposta desse desafio é fazer estilos de botões com suas variantes sempre definindo o cursor conforme correspondido."
      />
      <Challenge03Container>
        <Content>
          <Header>
            <h1>Teste os botões</h1>
            <p>
              Interaja com os botões e observe a mudança de aparência e de
              cursores
            </p>
          </Header>
          <ButtonGroup>
            <Button
              loading={loading}
              animated={loading}
              onClick={() => handleDisable()}
              disabled={disabled}
            >
              {loading && <CircleNotch size={16} weight="bold" />}
              Interaja Comigo
            </Button>
            <Button variant="secondary" disabled={disabled}>
              Interaja Comigo
            </Button>
            <Button variant="tertiary" movable disabled={disabled}>
              <List size={18} weight="bold" />
              Interaja Comigo
            </Button>
          </ButtonGroup>
        </Content>
      </Challenge03Container>
    </>
  );
}
