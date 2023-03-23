import kanbanPencilImg from "@/assets/images/kanban-pencil.svg";
import { Avatar } from "@/components/Avatar";
import Image from "next/image";
import { KanbanProfileComponent } from "./styles";

export function KanbanProfile() {
  return (
    <KanbanProfileComponent>
      <h1>
        Meu Kanban
        <Image src={kanbanPencilImg} alt="Ícone de um lápis" />
      </h1>
      <Avatar
        avatarSize={64}
        imgUrl="https://github.com/DevPedroHB.png"
        altText="Avatar de DevPedroHB"
      />
    </KanbanProfileComponent>
  );
}
