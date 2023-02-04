import { challenges } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { GithubLogo, PaperPlaneRight } from "phosphor-react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HomeContainer,
  HomeContent,
} from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        {challenges.map((challenge) => {
          const challengeIdFormatted = String(challenge.id).padStart(2, "0");

          return (
            <Card key={challenge.id}>
              <CardHeader>
                <Image
                  src={challenge.imgURL}
                  width={1920}
                  height={1348}
                  alt={`Imagem do primeiro desafio ${challenge.title}`}
                />
                <div>
                  <h2>{challenge.title}</h2>
                  <span>Desafio #{challengeIdFormatted}</span>
                </div>
              </CardHeader>
              <CardBody>
                <p>{challenge.description}</p>
              </CardBody>
              <CardFooter>
                <Link href={`/challenge-${challengeIdFormatted}`}>
                  Acessar
                  <PaperPlaneRight size={20} weight="bold" color="#00B37E" />
                </Link>
                <Link href={challenge.repositoryURL} target="_blank">
                  Repositório
                  <GithubLogo size={20} weight="bold" color="#00B37E" />
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </HomeContent>
    </HomeContainer>
  );
}
