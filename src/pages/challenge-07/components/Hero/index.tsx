import CarnavalIlustra01Img from "@/assets/images/carnaval-ilustra-01.png";
import CarnavalIlustra02Img from "@/assets/images/carnaval-ilustra-02.png";
import { carnavalBlocks, getUniqueFieldValues } from "@/utils";
import * as Select from "@radix-ui/react-select";
import Image from "next/image";
import {
  CaretDown,
  CaretUp,
  Check,
  MagnifyingGlass,
  MapPin,
} from "phosphor-react";
import {
  HeroContainer,
  HeroContent,
  HeroSearch,
  HeroSearchButton,
  HeroSearchGroup,
  HeroTitle,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  StyledItemIndicator,
} from "./styles";

export function Hero() {
  const cidades = getUniqueFieldValues<typeof carnavalBlocks[0]>(
    carnavalBlocks,
    "location"
  );

  return (
    <HeroContainer>
      <Image
        src={CarnavalIlustra01Img}
        alt="Ilustração de carnaval topo esquerdo."
      />
      <Image
        src={CarnavalIlustra02Img}
        alt="Ilustração de carnaval fundo direito."
      />
      <HeroContent>
        <HeroTitle>
          <p>find your block</p>
          <h1>
            Encontre os <span>melhores blocos</span> de carnaval de 2023
          </h1>
        </HeroTitle>
        <HeroSearch>
          <HeroSearchGroup>
            <input type="text" placeholder="Pesquise por nome" required />
            <MagnifyingGlass size={24} color="#E45858" />
          </HeroSearchGroup>
          <HeroSearchGroup>
            <Select.Root>
              <SelectTrigger aria-label="Cidades">
                <Select.Value placeholder="Selecione uma cidade" />
                <SelectIcon>
                  <CaretDown size={24} weight="bold" />
                </SelectIcon>
              </SelectTrigger>
              <Select.Portal style={{ zIndex: 9999 }}>
                <SelectContent>
                  <SelectScrollUpButton>
                    <CaretUp size={24} weight="bold" />
                  </SelectScrollUpButton>
                  <Select.Viewport>
                    <Select.Group>
                      <SelectLabel>Selecione uma cidade</SelectLabel>
                      {cidades.map((cidade) => (
                        <SelectItem
                          key={cidade.toString()}
                          value={cidade.toString()}
                        >
                          <Select.ItemText>{cidade.toString()}</Select.ItemText>
                          <StyledItemIndicator>
                            <Check weight="bold" />
                          </StyledItemIndicator>
                        </SelectItem>
                      ))}
                    </Select.Group>
                  </Select.Viewport>
                  <SelectScrollDownButton>
                    <CaretDown size={24} weight="bold" />
                  </SelectScrollDownButton>
                </SelectContent>
              </Select.Portal>
            </Select.Root>
            <MapPin size={24} color="#E45858" />
          </HeroSearchGroup>
          <HeroSearchButton>Buscar Agora</HeroSearchButton>
        </HeroSearch>
      </HeroContent>
    </HeroContainer>
  );
}
