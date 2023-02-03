import AcordaDevinhoImg from "@/assets/images/acorda-devinho.png";
import { getPercentage, getRandomInt } from "@/utils";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Controls } from "./components/Controls";
import { Info } from "./components/Info";
import { Timer } from "./components/Timer";
import {
  CardPlayer1,
  CardPlayer2,
  CardPlayer3,
  CardWrapper,
  Challenge01Container,
} from "./styles";

interface IChallenge01 {
  progressbar: number;
  musicTime: number;
  currentMusicTime: number;
}

export default function Challenge01({
  currentMusicTime,
  musicTime,
  progressbar,
}: IChallenge01) {
  return (
    <Challenge01Container>
      <CardPlayer1>
        <Image
          src={AcordaDevinhoImg}
          width={190}
          height={190}
          alt="Imagem da música"
        />
        <Info />
        <Controls />
        <Timer
          progressbar={progressbar}
          time={musicTime}
          currentTime={currentMusicTime}
        />
      </CardPlayer1>
      <CardPlayer2>
        <CardWrapper>
          <Image
            src={AcordaDevinhoImg}
            width={84}
            height={84}
            alt="Imagem da música"
          />
          <Info />
        </CardWrapper>
        <Controls />
        <Timer
          progressbar={progressbar}
          time={musicTime}
          currentTime={currentMusicTime}
        />
      </CardPlayer2>
      <CardPlayer3>
        <CardWrapper>
          <Image
            src={AcordaDevinhoImg}
            width={84}
            height={84}
            alt="Imagem da música"
          />
          <Info />
        </CardWrapper>
        <Controls />
      </CardPlayer3>
    </Challenge01Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const musicTime = getRandomInt(0, 1000);
  const currentMusicTime = getRandomInt(0, musicTime);
  const progressbar = getPercentage(currentMusicTime, musicTime);

  return {
    props: {
      currentMusicTime,
      musicTime,
      progressbar,
    },
  };
};
