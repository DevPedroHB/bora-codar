import { randomBytes } from "crypto";

interface IPricingTables {
  id: string;
  type: "DEFAULT" | "ADVANTAGEOUS" | "CUSTOMIZED";
  title: string;
  plan: string;
  price: number;
  benefits: string[];
}

export const pricingTables: IPricingTables[] = [
  {
    id: randomBytes(20).toString("hex"),
    type: "DEFAULT",
    title: "Para você começar",
    plan: "Essentials",
    price: 19.97,
    benefits: ["Até 3 usuários", "Autoatendimento"],
  },
  {
    id: randomBytes(20).toString("hex"),
    type: "ADVANTAGEOUS",
    title: "Para você decolar",
    plan: "Ultimate",
    price: 29.97,
    benefits: [
      "Usuários ilimitados",
      "Suporte 24/7",
      "CSM Dedicado",
      "Treinamentos",
    ],
  },
  {
    id: randomBytes(20).toString("hex"),
    type: "CUSTOMIZED",
    title: "Para sua empresa",
    plan: "Enterprise",
    price: 0,
    benefits: [
      "Plano customizado especialmente para a necessidade de seu negocio",
    ],
  },
];
