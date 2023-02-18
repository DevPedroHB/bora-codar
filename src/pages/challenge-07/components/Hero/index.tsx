import CarnavalIlustra01Img from "@/assets/images/carnaval-ilustra-01.png";
import CarnavalIlustra02Img from "@/assets/images/carnaval-ilustra-02.png";
import { carnavalBlocks, getUniqueFieldValues } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Select from "@radix-ui/react-select";
import Image from "next/image";
import {
  CaretDown,
  CaretUp,
  Check,
  MagnifyingGlass,
  MapPin,
} from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
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

const SearchFormSchema = z.object({
  title: z.string(),
  location: z.string(),
});

export type SearchFormData = z.infer<typeof SearchFormSchema>;

interface IHero {
  handleFilterBlocks: (data: SearchFormData) => void;
}

export function Hero({ handleFilterBlocks }: IHero) {
  const cidades = getUniqueFieldValues<typeof carnavalBlocks[0]>(
    carnavalBlocks,
    "location"
  );
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(SearchFormSchema),
  });

  function handleSearch(data: SearchFormData) {
    handleFilterBlocks(data);

    reset({ title: "", location: "Todas" });
  }

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
        <HeroSearch onSubmit={handleSubmit(handleSearch)}>
          <HeroSearchGroup>
            <input
              type="text"
              placeholder="Pesquise por nome"
              {...register("title")}
            />
            <MagnifyingGlass size={24} color="#E45858" />
            {errors.title && <small>{errors.title.message}</small>}
          </HeroSearchGroup>
          <HeroSearchGroup>
            <Controller
              name="location"
              control={control}
              render={({ field }) => {
                return (
                  <Select.Root
                    onValueChange={(selected) => {
                      field.onChange(selected);
                    }}
                    value={field.value}
                  >
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
                            <SelectItem value="Todas">
                              <Select.ItemText>Todas</Select.ItemText>
                              <StyledItemIndicator>
                                <Check weight="bold" />
                              </StyledItemIndicator>
                            </SelectItem>
                            {cidades.map((cidade) => (
                              <SelectItem
                                key={cidade.toString()}
                                value={cidade.toString()}
                              >
                                <Select.ItemText>
                                  {cidade.toString()}
                                </Select.ItemText>
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
                );
              }}
            />
            <MapPin size={24} color="#E45858" />
            {errors.location && <small>{errors.location.message}</small>}
          </HeroSearchGroup>
          <HeroSearchButton>Buscar Agora</HeroSearchButton>
        </HeroSearch>
      </HeroContent>
    </HeroContainer>
  );
}
