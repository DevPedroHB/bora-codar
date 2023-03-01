import DashboardEmojiSmileImg from "@/assets/images/dashboard-emoji-smile.png";
import Image from "next/image";
import { DefaultCard } from "../DefaultCard";
import { NpsCardBody, NpsCardFooter } from "./styles";

interface ICardGeneralNps {
  value: number;
}

export function CardGeneralNps({ value }: ICardGeneralNps) {
  return (
    <DefaultCard alignCenter>
      <h2>NPS geral</h2>
      <NpsCardBody>
        <Image src={DashboardEmojiSmileImg} alt="Emoji sorrindo" />
        <p>Excelente!</p>
      </NpsCardBody>
      <NpsCardFooter>
        <span>NPS Score</span>
        <span>{value}</span>
      </NpsCardFooter>
    </DefaultCard>
  );
}
