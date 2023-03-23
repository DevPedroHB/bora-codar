import kanbanLogoImg from "@/assets/images/kanban-logo.png";
import Image from "next/image";
import { CaretRight } from "phosphor-react";
import { useState } from "react";
import {
  IoCog,
  IoDocumentText,
  IoPeople,
  IoTabletPortrait,
} from "react-icons/io5";
import {
  KanbanSidebarComponent,
  SidebarLink,
  SidebarMenu,
  SidebarMenuToggle,
} from "./styles";

export function KanbanSidebar() {
  const [toggle, setToggle] = useState(false);

  return (
    <KanbanSidebarComponent toggle={toggle}>
      <SidebarMenuToggle onClick={() => setToggle(!toggle)} toggle={toggle}>
        <CaretRight size={20} weight="bold" />
      </SidebarMenuToggle>
      <Image src={kanbanLogoImg} alt="Logotipo Kanban" />
      <SidebarMenu>
        <SidebarLink href="/challenge-12" active>
          <IoTabletPortrait size={20} />
          <span>Boards</span>
        </SidebarLink>
        <SidebarLink href="/challenge-12">
          <IoPeople size={20} />
          <span>Equipes</span>
        </SidebarLink>
        <SidebarLink href="/challenge-12">
          <IoDocumentText size={20} />
          <span>Relatórios</span>
        </SidebarLink>
        <SidebarLink href="/challenge-12">
          <IoCog size={20} />
          <span>Ajustes</span>
        </SidebarLink>
      </SidebarMenu>
    </KanbanSidebarComponent>
  );
}
