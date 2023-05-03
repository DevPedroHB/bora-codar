import { Avatar } from "@/components/Avatar";
import { IContactList, getRandomColor } from "@/utils";
import {
  ContactPageContactsCategory,
  ContactPageContactsComponents,
  ContactPageContactsContact,
  ContactPageContactsWrapper,
} from "./styles";

interface IContactPageContacts {
  contactList: IContactList[];
}

export function ContactPageContacts({ contactList }: IContactPageContacts) {
  return (
    <ContactPageContactsComponents>
      {contactList.map((cl) => (
        <ContactPageContactsCategory
          key={cl.category}
          css={{ "--category-color": `${getRandomColor("#E1E1E6")}` }}
        >
          <span>{cl.category}</span>
          <ContactPageContactsWrapper>
            {cl.contacts.map((c) => (
              <ContactPageContactsContact key={c.id}>
                <Avatar
                  avatarSize={48}
                  imgUrl={c.avatar_url}
                  altText={`Avatar de ${c.name}`}
                />
                <div>
                  <h3>{c.name}</h3>
                  <p>{c.number}</p>
                </div>
              </ContactPageContactsContact>
            ))}
          </ContactPageContactsWrapper>
        </ContactPageContactsCategory>
      ))}
    </ContactPageContactsComponents>
  );
}
