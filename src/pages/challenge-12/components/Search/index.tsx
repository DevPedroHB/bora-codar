import { useKanban } from "@/hooks/useKanban";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Popover from "@radix-ui/react-popover";
import { X } from "phosphor-react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoFilter, IoSearch } from "react-icons/io5";
import { z } from "zod";
import {
  KanbanSearchComponent,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  SearchInputWrapper,
  ToggleGroupItem,
  ToggleGroupRoot,
} from "./styles";

const KanbanSearchFormSchema = z.object({
  category: z.string(),
  query: z.string(),
});

export type KanbanSearchFormData = z.infer<typeof KanbanSearchFormSchema>;

export function KanbanSearch() {
  const { categories, handleFilterTasks } = useKanban();
  const { register, control, watch } = useForm<KanbanSearchFormData>({
    resolver: zodResolver(KanbanSearchFormSchema),
  });
  const category = watch("category");
  const query = watch("query");

  useEffect(() => {
    const data = { category, query };

    handleFilterTasks(data);
  }, [category, query, handleFilterTasks]);

  return (
    <KanbanSearchComponent>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button>
            <IoFilter size={24} />
            {category ? String(category) : "Filtrar"}
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <PopoverContent>
            <Controller
              name="category"
              control={control}
              render={({ field }) => {
                return (
                  <ToggleGroupRoot
                    type="single"
                    onValueChange={(selected) => {
                      field.onChange(selected);
                    }}
                    value={field.value}
                  >
                    {categories.map((category) => (
                      <ToggleGroupItem key={category} value={category}>
                        {category}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroupRoot>
                );
              }}
            />
            <PopoverClose>
              <X size={11} weight="bold" />
            </PopoverClose>
            <PopoverArrow />
          </PopoverContent>
        </Popover.Portal>
      </Popover.Root>
      <SearchInputWrapper>
        <IoSearch size={24} />
        <input
          type="search"
          placeholder="Busque por cards, assuntos ou responsáveis..."
          {...register("query")}
        />
      </SearchInputWrapper>
    </KanbanSearchComponent>
  );
}
