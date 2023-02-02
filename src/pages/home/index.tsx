import { challenges } from "@/utils/challenges";
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
        {challenges.map((challenge) => (
          <Card key={challenge.id}>
            <CardHeader>
              <Image
                src={challenge.imgURL}
                width={1920}
                height={1348}
                alt="Imagem do primeiro desafio"
              />
              <div>
                <h2>{challenge.title}</h2>
                <span>Desafio #{challenge.id}</span>
              </div>
            </CardHeader>
            <CardBody>
              <p>{challenge.description}</p>
            </CardBody>
            <CardFooter>
              <Link href={`/challenge-${challenge.id}`}>
                Acessar
                <PaperPlaneRight size={20} weight="bold" color="#00B37E" />
              </Link>
              <Link href={challenge.repositoryURL} target="_blank">
                Repositório
                <GithubLogo size={20} weight="bold" color="#00B37E" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </HomeContent>
    </HomeContainer>
  );
}
