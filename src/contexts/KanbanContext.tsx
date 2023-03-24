import { KanbanNewTaskFormData } from "@/pages/challenge-12/components/NewTaskModal";
import { KanbanSearchFormData } from "@/pages/challenge-12/components/Search";
import { kanbanTasks } from "@/utils/kanban-tasks";
import { randomBytes } from "crypto";
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
  handleNewTask: (data: KanbanNewTaskFormData) => void;
  handleDeleteTaskById: (id: string) => void;
}

export const KanbanContext = createContext({} as IKanbanContext);

interface IKanbanContextProvider {
  children: ReactNode;
}

export default function KanbanContextProvider({
  children,
}: IKanbanContextProvider) {
  const [listTasksBackup, setListTasksBackup] = useState(kanbanTasks);
  const [listTasks, setListTasks] = useState(kanbanTasks);
  const [categories, setCategories] = useState<string[]>([]);

  function move(fromList: number, toList: number, from: number, to: number) {
    setListTasksBackup(
      produce(listTasksBackup, (draft) => {
        const dragged = draft[fromList].tasks[from];

        draft[fromList].tasks.splice(from, 1);
        draft[toList].tasks.splice(to, 0, dragged);
      })
    );
  }

  const getAllCategories = useCallback(() => {
    const categories = [
      ...new Set(
        listTasksBackup.flatMap((task) =>
          task.tasks.flatMap((subtask) => subtask.categories)
        )
      ),
    ];

    setCategories(categories.sort());
  }, [listTasksBackup]);

  const handleFilterTasks = useCallback(
    (data: KanbanSearchFormData) => {
      const listTasksFiltered = listTasksBackup.reduce(
        (acc: typeof kanbanTasks, current) => {
          const filteredTasks = current.tasks.filter((task) => {
            if (data.category && !task.categories.includes(data.category)) {
              return false;
            }
            if (data.query) {
              const query = data.query.toLowerCase();
              if (
                !task.title.toLowerCase().includes(query) &&
                !task.description.toLowerCase().includes(query)
              ) {
                return false;
              }
            }
            return true;
          });

          if (filteredTasks.length > 0) {
            acc.push({
              title: current.title,
              creatable: current.creatable,
              tasks: filteredTasks,
            });
          }

          return acc;
        },
        []
      );

      setListTasks(listTasksFiltered);
    },
    [listTasksBackup]
  );

  function handleNewTask(data: KanbanNewTaskFormData) {
    setListTasksBackup(
      produce((draft) => {
        const toDoColumn = draft.find((column) => column.title === "A fazer");

        if (toDoColumn) {
          toDoColumn.tasks.push({
            id: randomBytes(20).toString("hex"),
            title: data.title,
            description: data.description,
            categories: data.categories,
          });
        }
      })
    );
  }

  function handleDeleteTaskById(id: string) {
    setListTasksBackup(
      produce(listTasksBackup, (draft) => {
        draft.forEach((column) => {
          column.tasks = column.tasks.filter((task) => task.id !== id);
        });
      })
    );
  }

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories, listTasksBackup]);

  return (
    <KanbanContext.Provider
      value={{
        listTasks,
        categories,
        move,
        handleFilterTasks,
        handleNewTask,
        handleDeleteTaskById,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
}
