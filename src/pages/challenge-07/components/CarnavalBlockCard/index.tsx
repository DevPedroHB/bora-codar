import { carnavalBlocks } from "@/utils";
import Image from "next/image";
import { MapPin } from "phosphor-react";
import { CarnavalBlockCardBody, CarnavalBlockCardContainer } from "./styles";

interface ICarnavalBlockCard {
  carnavalBlock: typeof carnavalBlocks[0];
}

export function CarnavalBlockCard({ carnavalBlock }: ICarnavalBlockCard) {
  return (
    <CarnavalBlockCardContainer>
      <Image src={carnavalBlock.imageUrl} alt={carnavalBlock.title} />
      <CarnavalBlockCardBody>
        <strong>{carnavalBlock.title}</strong>
        <p>{carnavalBlock.description}</p>
        <div>
          <MapPin size={24} color="#E45858" />
          <p>{carnavalBlock.location}</p>
        </div>
      </CarnavalBlockCardBody>
    </CarnavalBlockCardContainer>
  );
}
