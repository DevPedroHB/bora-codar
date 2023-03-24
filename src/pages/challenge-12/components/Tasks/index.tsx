import { useKanban } from "@/hooks/useKanban";
import * as Dialog from "@radix-ui/react-dialog";
import { Plus } from "phosphor-react";
import { NewTaskModal } from "../NewTaskModal";
import { KanbanTask } from "../Task";
import {
  KanbanTasksComponent,
  TasksContent,
  TasksTitle,
  TasksWrapper,
} from "./styles";

export function KanbanTasks() {
  const { listTasks } = useKanban();

  return (
    <KanbanTasksComponent>
      {listTasks.map((tasks, listIndex) => (
        <TasksContent key={tasks.title}>
          <TasksTitle>
            <h2>{tasks.title}</h2>
            {tasks.creatable && (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>
                    <Plus size={20} />
                  </button>
                </Dialog.Trigger>
                <NewTaskModal />
              </Dialog.Root>
            )}
          </TasksTitle>
          <TasksWrapper>
            {tasks.tasks.map((task, index) => (
              <KanbanTask
                key={task.id}
                listIndex={listIndex}
                index={index}
                task={task}
              />
            ))}
          </TasksWrapper>
        </TasksContent>
      ))}
    </KanbanTasksComponent>
  );
}
