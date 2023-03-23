import { KanbanSearchFormData } from "@/pages/challenge-12/components/Search";
import { kanbanTasks } from "@/utils/kanban-tasks";
import produce from "immer";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface IKanbanContext {
  listTasks: typeof kanbanTasks;
  categories: string[];
  move: (fromList: number, toList: number, from: number, to: number) => void;
  handleFilterTasks: (data: KanbanSearchFormData) => void;
}

export const KanbanContext = createContext({} as IKanbanContext);

interface IKanbanContextProvider {
  children: ReactNode;
}

export default function KanbanContextProvider({
  children,
}: IKanbanContextProvider) {
  const [listTasks, setListTasks] = useState(kanbanTasks);
  const [categories, setCategories] = useState<string[]>([]);

  function move(fromList: number, toList: number, from: number, to: number) {
    setListTasks(
      produce(listTasks, (draft) => {
        const dragged = draft[fromList].tasks[from];

        draft[fromList].tasks.splice(from, 1);
        draft[toList].tasks.splice(to, 0, dragged);
      })
    );
  }

  const getAllCategories = useCallback(() => {
    const categories = [
      ...new Set(
        kanbanTasks.flatMap((task) =>
          task.tasks.flatMap((subtask) => subtask.categories)
        )
      ),
    ];

    setCategories(categories.sort());
  }, []);

  const handleFilterTasks = useCallback((data: KanbanSearchFormData) => {
    const listTasksFiltered = kanbanTasks.reduce(
      (acc: typeof kanbanTasks, current) => {
        const filteredTasks = current.tasks.filter((task) => {
          if (data.category && !task.categories.includes(data.category)) {
            return false;
          }
          if (data.query) {
            const query = data.query.toLowerCase();
            if (
              !task.title.toLowerCase().includes(query) &&
              !task.content.toLowerCase().includes(query)
            ) {
              return false;
            }
          }
          return true;
        });

        if (filteredTasks.length > 0) {
          acc.push({
            title: current.title,
            tasks: filteredTasks,
          });
        }

        return acc;
      },
      []
    );

    setListTasks(listTasksFiltered);
  }, []);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  return (
    <KanbanContext.Provider
      value={{
        listTasks,
        categories,
        move,
        handleFilterTasks,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
}
