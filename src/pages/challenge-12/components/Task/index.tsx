import { useKanban } from "@/hooks/useKanban";
import { kanbanTasks } from "@/utils/kanban-tasks";
import { Trash } from "phosphor-react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { KanbanTaskComponent, TaskCategories } from "./styles";

interface IKanbanTask {
  listIndex: number;
  index: number;
  task: typeof kanbanTasks[0]["tasks"][0];
}

export function KanbanTask({ listIndex, index, task }: IKanbanTask) {
  const ref = useRef<HTMLDivElement>(null);
  const { move, handleDeleteTaskById } = useKanban();

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "task",
    item: { listIndex, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, dropRef] = useDrop({
    accept: "task",
    hover(item: IKanbanTask, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current!.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset!.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) return;
      if (draggedIndex > targetIndex && draggedTop > targetCenter) return;

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <KanbanTaskComponent ref={ref} isDragging={isDragging}>
      <button onClick={() => handleDeleteTaskById(task.id)}>
        <Trash size={16} weight="bold" />
      </button>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <TaskCategories>
        {task.categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
        {task.categories.length === 0 && <span>Sem categoria</span>}
      </TaskCategories>
    </KanbanTaskComponent>
  );
}
