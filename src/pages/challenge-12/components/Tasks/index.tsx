import { useKanban } from "@/hooks/useKanban";
import { KanbanTask } from "../Task";
import { KanbanTasksComponent, TaskContent, TaskWrapper } from "./styles";

export function KanbanTasks() {
  const { listTasks } = useKanban();

  return (
    <KanbanTasksComponent>
      {listTasks.map((tasks, listIndex) => (
        <TaskContent key={tasks.title}>
          <h2>{tasks.title}</h2>
          <TaskWrapper>
            {tasks.tasks.map((task, index) => (
              <KanbanTask
                key={task.id}
                listIndex={listIndex}
                index={index}
                task={task}
              />
            ))}
          </TaskWrapper>
        </TaskContent>
      ))}
    </KanbanTasksComponent>
  );
}
