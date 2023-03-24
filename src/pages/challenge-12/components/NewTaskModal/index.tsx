import kanbanPencilImg from "@/assets/images/kanban-pencil.svg";
import { useKanban } from "@/hooks/useKanban";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Plus, X } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoSend } from "react-icons/io5";
import { z } from "zod";
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  NewTaskCategories,
  NewTaskForm,
  NewTaskInputWrapper,
} from "./styles";

const KanbanNewTaskFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  categories: z.array(z.string()),
});

export type KanbanNewTaskFormData = z.infer<typeof KanbanNewTaskFormSchema>;

export function NewTaskModal() {
  const [newCategories, setNewCategories] = useState<string[]>([]);
  const { register, watch, reset, handleSubmit } =
    useForm<KanbanNewTaskFormData>({
      resolver: zodResolver(KanbanNewTaskFormSchema),
    });
  const { handleNewTask, categories } = useKanban();

  function handleAddCategory() {
    const category = watch("categories");

    if (category.length === 0) {
      return;
    }

    if (newCategories.includes(String(category))) {
      reset({ categories: [] });
    } else {
      setNewCategories((prev) => [...prev, String(category)]);
      console.log(category);
    }

    reset({ categories: [] });
  }

  function handleRemoveCategory(category: string) {
    setNewCategories((prev) => prev.filter((c) => c !== category));
  }

  function handleSubmitTask(data: KanbanNewTaskFormData) {
    data.categories = newCategories;

    handleNewTask(data);

    setNewCategories([]);

    reset();
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>
          Nova Tarefa
          <Image src={kanbanPencilImg} alt="Ícone de um lápis" />
        </DialogTitle>
        <DialogClose>
          <X size={24} weight="bold" />
        </DialogClose>
        <NewTaskForm onSubmit={handleSubmit(handleSubmitTask)}>
          <input
            type="text"
            placeholder="Titulo"
            required
            {...register("title")}
          />
          <textarea
            placeholder="Descrição"
            required
            {...register("description")}
          ></textarea>
          <NewTaskInputWrapper>
            <input
              type="text"
              list="category"
              placeholder="Categoria"
              autoComplete="off"
              {...register("categories")}
            />
            <datalist id="category">
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </datalist>
            <button
              type="button"
              onClick={handleAddCategory}
              title="Adicionar categoria"
            >
              <Plus size={20} />
            </button>
          </NewTaskInputWrapper>
          <NewTaskCategories>
            {newCategories.map((category, i) => (
              <span key={i} onClick={() => handleRemoveCategory(category)}>
                {category}
                <X size={11} />
              </span>
            ))}
            {newCategories.length === 0 && (
              <small>Adicione pelo menos 1 categoria.</small>
            )}
          </NewTaskCategories>
          <button type="submit">
            Criar
            <IoSend size={16} />
          </button>
        </NewTaskForm>
      </DialogContent>
    </Dialog.Portal>
  );
}
