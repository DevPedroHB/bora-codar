import { useKanban } from "@/hooks/useKanban";
import * as Popover from "@radix-ui/react-popover";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { X } from "phosphor-react";
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  ToggleGroupItem,
  ToggleGroupRoot,
} from "./styles";

type IKanbanSearchPopover = ToggleGroup.ToggleGroupSingleProps;

export function KanbanSearchPopover({ ...props }: IKanbanSearchPopover) {
  const { categories } = useKanban();

  return (
    <Popover.Portal>
      <PopoverContent>
        <ToggleGroupRoot {...props}>
          {categories.map((category) => (
            <ToggleGroupItem key={category} value={category}>
              {category}
            </ToggleGroupItem>
          ))}
        </ToggleGroupRoot>
        <PopoverClose>
          <X size={11} weight="bold" />
        </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </Popover.Portal>
  );
}
