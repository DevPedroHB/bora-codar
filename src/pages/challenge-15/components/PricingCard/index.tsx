import { pricingTables } from "@/utils";
import { Check, Info } from "phosphor-react";
import {
  PricingCardBenefits,
  PricingCardButton,
  PricingCardComponent,
  PricingCardHeader,
} from "./styles";

interface IPricingCard {
  pricingTable: typeof pricingTables[0];
}

export function PricingCard({ pricingTable }: IPricingCard) {
  return (
    <PricingCardComponent
      variant={
        pricingTable.type === "ADVANTAGEOUS" ? "ADVANTAGEOUS" : "DEFAULT"
      }
    >
      {pricingTable.type === "ADVANTAGEOUS" && <span>Mais Vantajoso</span>}
      <PricingCardHeader>
        <strong>{pricingTable.title}</strong>
        <div>
          <h2>{pricingTable.plan}</h2>
          {pricingTable.price !== 0 && (
            <p>
              <small>R$</small>&nbsp;
              {String(pricingTable.price).replace(".", ",")}
              <small>/mês</small>
            </p>
          )}
        </div>
      </PricingCardHeader>
      <PricingCardButton
        variant={
          pricingTable.type === "ADVANTAGEOUS" ? "ADVANTAGEOUS" : "DEFAULT"
        }
      >
        {pricingTable.type === "CUSTOMIZED"
          ? "Fale com a gente"
          : "Assinar agora"}
      </PricingCardButton>
      <hr />
      <PricingCardBenefits>
        {pricingTable.benefits.map((benefit) => (
          <li key={benefit}>
            {pricingTable.type === "CUSTOMIZED" ? (
              <>
                <Check size={20} weight="bold" color="#1B873F" />
                <span>{benefit}</span>
              </>
            ) : (
              <>
                <Check size={20} weight="bold" color="#1B873F" />
                <span>{benefit}</span>
                <Info
                  size={20}
                  color={
                    pricingTable.type === "ADVANTAGEOUS" ? "#64748B" : "#475569"
                  }
                />
              </>
            )}
          </li>
        ))}
      </PricingCardBenefits>
    </PricingCardComponent>
  );
}
