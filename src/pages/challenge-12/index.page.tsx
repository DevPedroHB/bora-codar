import KanbanContextProvider from "@/contexts/KanbanContext";
import { NextSeo } from "next-seo";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { KanbanProfile } from "./components/Profile";
import { KanbanSearch } from "./components/Search";
import { KanbanSidebar } from "./components/Sidebar";
import { KanbanTasks } from "./components/Tasks";
import { Challenge12Container, KanbanContent } from "./styles";

export default function Challenge12() {
  return (
    <DndProvider backend={HTML5Backend}>
      <NextSeo
        title="Desafio 12 | Kanban"
        description="Este é um projeto de Página de Kanban que tem como objetivo oferecer uma interface visual para gerenciamento de tarefas em uma plataforma de Kanban. A página permite que o usuário crie, edite e mova tarefas entre diferentes colunas, além de incluir recursos como busca e filtro de tarefas."
      />
      <KanbanContextProvider>
        <Challenge12Container>
          <KanbanSidebar />
          <KanbanContent>
            <KanbanProfile />
            <KanbanSearch />
            <KanbanTasks />
          </KanbanContent>
        </Challenge12Container>
      </KanbanContextProvider>
    </DndProvider>
  );
}
