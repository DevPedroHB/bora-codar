import { KanbanContext } from "@/contexts/KanbanContext";
import { useContext } from "react";

export function useKanban() {
  const context = useContext(KanbanContext);

  return context;
}
