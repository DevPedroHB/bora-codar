import { IContactList, contactPageList } from "@/utils";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { ContactPageContacts } from "./components/ContactPageContacts";
import { ContactPageHeader } from "./components/ContactPageHeader";
import { Challenge16Container, ContactPageContent } from "./styles";

export default function Challenge16() {
  const [contacts, setContacts] = useState<IContactList[]>([]);
  const [search, setSearch] = useState("");

  const filteredContactsList = contacts
    .map(({ category, contacts }) => ({
      category,
      contacts: contacts.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(search.toLowerCase()) ||
          number.includes(search)
      ),
    }))
    .filter(({ contacts }) => contacts.length > 0);

  useEffect(() => {
    setContacts(contactPageList());
  }, []);

  return (
    <>
      <NextSeo
        title="Desafio 16 | Página de Contatos"
        description="Este projeto é uma página de contatos que permite aos usuários visualizar informações de contato da pessoa."
      />
      <Challenge16Container>
        <ContactPageContent>
          <ContactPageHeader search={search} setSearch={setSearch} />
          <ContactPageContacts contactList={filteredContactsList} />
        </ContactPageContent>
      </Challenge16Container>
    </>
  );
}
