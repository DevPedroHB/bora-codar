import { Dispatch, SetStateAction } from "react";
import { IoAdd, IoPencil, IoSearchOutline, IoTrash } from "react-icons/io5";
import {
  ContactPageHeaderComponent,
  ContactPageHeaderInputWrapper,
  ContactPageHeaderNav,
} from "./styles";

interface IContactPageHeader {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export function ContactPageHeader({ search, setSearch }: IContactPageHeader) {
  return (
    <ContactPageHeaderComponent>
      <ContactPageHeaderNav>
        <h2>Meus contatos</h2>
        <div>
          <IoAdd />
          <IoPencil />
          <IoTrash />
        </div>
      </ContactPageHeaderNav>
      <ContactPageHeaderInputWrapper>
        <button>
          <IoSearchOutline />
        </button>
        <input
          type="text"
          placeholder="Busque por nome ou por dados de contato..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </ContactPageHeaderInputWrapper>
    </ContactPageHeaderComponent>
  );
}
