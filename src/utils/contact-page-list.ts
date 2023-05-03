export interface IContactList {
  category: string;
  contacts: Array<{
    id: string;
    avatar_url: string;
    name: string;
    number: string;
  }>;
}

export function contactPageList() {
  const nomes = [
    "Abraão",
    "Beatriz",
    "Brenda",
    "Carlos",
    "Carla",
    "Daniel",
    "Eduardo",
    "Fernanda",
    "Gabriel",
    "Giovanna",
    "Hugo",
    "Isabela",
    "João",
    "José",
    "Laura",
    "Leonardo",
    "Leticia",
    "Maria",
    "Mariana",
    "Natalia",
    "Otávio",
    "Pedro",
    "Rafael",
    "Renata",
    "Samuel",
    "Talita",
    "Vinícius",
    "Yasmim",
    "Zacarias",
  ];

  function gerarNumero() {
    const num1 = Math.floor(Math.random() * 100000000);
    const num2 = Math.floor(Math.random() * 10000);

    return `(${num1.toString().substring(0, 2)}) ${num1
      .toString()
      .substring(2, 7)}-${num2.toString().padStart(4, "0")}`;
  }

  const categorias = new Set(nomes.map((nome) => nome[0]));
  const contactList: IContactList[] = [];

  categorias.forEach((letra) => {
    const contatosComLetra = nomes.filter((nome) => nome[0] === letra);

    if (contatosComLetra.length > 0) {
      const categoria: IContactList = {
        category: letra,
        contacts: [],
      };

      contatosComLetra.forEach((nome) => {
        const contato = {
          id: Math.random().toString(36).substring(2, 15),
          avatar_url: `https://randomuser.me/api/portraits/${
            Math.random() < 0.5 ? "men" : "women"
          }/${Math.floor(Math.random() * 27) + 1}.jpg`,
          name: nome,
          number: gerarNumero(),
        };

        categoria.contacts.push(contato);
      });

      contactList.push(categoria);
    }
  });

  return contactList;
}
