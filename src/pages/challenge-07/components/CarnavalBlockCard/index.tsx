import { carnavalBlocks, formatTextForRoute } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MapPin } from "phosphor-react";
import { CarnavalBlockCardBody, CarnavalBlockCardContainer } from "./styles";

interface ICarnavalBlockCard {
  carnavalBlock: typeof carnavalBlocks[0];
}

export function CarnavalBlockCard({ carnavalBlock }: ICarnavalBlockCard) {
  const { pathname } = useRouter();

  return (
    <CarnavalBlockCardContainer>
      <Image src={carnavalBlock.imageUrl} alt={carnavalBlock.title} />
      <CarnavalBlockCardBody>
        <Link
          href={`/${pathname}/${formatTextForRoute(
            carnavalBlock.title,
            carnavalBlock.id
          )}`}
        >
          {carnavalBlock.title}
        </Link>
        <p>{carnavalBlock.description}</p>
        <div>
          <MapPin size={24} color="#E45858" />
          <p>{carnavalBlock.location}</p>
        </div>
      </CarnavalBlockCardBody>
    </CarnavalBlockCardContainer>
  );
}
