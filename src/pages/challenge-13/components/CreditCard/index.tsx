import contactlessPaymentImg from "@/assets/images/credit-card-contactless-payment.svg";
import eloImg from "@/assets/images/credit-card-elo.svg";
import mastercardImg from "@/assets/images/credit-card-mastercard.svg";
import visaImg from "@/assets/images/credit-card-visa.svg";
import { useCreditCard } from "@/hooks/useCreditCard";
import Image from "next/image";
import {
  CreditCardBack,
  CreditCardBackBlackBelt,
  CreditCardBackCVVArea,
  CreditCardComponent,
  CreditCardFront,
  CreditCardFrontNumber,
  CreditCardFrontWrapper,
} from "./styles";

export function CreditCard() {
  const {
    flip,
    setFlip,
    cardNumber,
    cardHolderName = "",
    cardValidity,
    cardCVV,
  } = useCreditCard();

  function setCurrentFlag(cardNumber: number) {
    const firstNumber = Number(String(cardNumber).charAt(0));

    if (firstNumber === 5 || firstNumber === 2) {
      return mastercardImg;
    } else if (firstNumber === 6) {
      return visaImg;
    }

    return eloImg;
  }

  function handleFormatValidity(validity: number) {
    const formattedValidity = String(validity ?? "")
      .replace("/", "")
      .padEnd(4, "•")
      .match(/.{1,2}/g);

    return (
      <span>
        {formattedValidity![0]}/{formattedValidity![1]}
      </span>
    );
  }

  return (
    <CreditCardComponent
      style={{ transformStyle: "preserve-3d" }}
      flip={flip}
      onClick={() => setFlip(!flip)}
    >
      <CreditCardFront>
        <CreditCardFrontWrapper>
          <Image
            src={setCurrentFlag(cardNumber!)}
            alt="Ícone da bandeira do cartão"
          />
          <Image
            src={contactlessPaymentImg}
            alt="Ícone de pagamento por aproximação"
          />
        </CreditCardFrontWrapper>
        <CreditCardFrontNumber>
          {String(cardNumber ?? "")
            .replace(/\s/g, "")
            .padEnd(16, "•")
            .match(/.{1,4}/g)
            ?.map((substring, index) => (
              <h2 key={index}>{substring}</h2>
            ))}
        </CreditCardFrontNumber>
        <CreditCardFrontWrapper>
          {cardHolderName === "" ? (
            <h3>Seu nome aqui</h3>
          ) : (
            <h3 style={{ textTransform: "uppercase" }}>{cardHolderName}</h3>
          )}
          {handleFormatValidity(cardValidity!)}
        </CreditCardFrontWrapper>
      </CreditCardFront>
      <CreditCardBack>
        <CreditCardBackBlackBelt />
        <CreditCardBackCVVArea>
          <p>{String(cardCVV ?? "").padEnd(3, "•")}</p>
          <span>CVV</span>
        </CreditCardBackCVVArea>
      </CreditCardBack>
    </CreditCardComponent>
  );
}
