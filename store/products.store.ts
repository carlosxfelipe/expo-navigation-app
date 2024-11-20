export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Fones de Ouvido Sem Fio",
    description:
      "Experimente uma qualidade de som premium com estes fones de ouvido sem fio. Projetados para conforto e uso prolongado, são perfeitos para amantes da música e profissionais.",
    price: 99.99,
  },
  {
    id: "2",
    title: "Relógio Inteligente",
    description:
      "Mantenha-se conectado e acompanhe seu estado físico com este elegante e moderno relógio inteligente. Equipado com funções como monitoramento de frequência cardíaca, GPS e mais.",
    price: 149.99,
  },
  {
    id: "3",
    title: "Caixa de Som Bluetooth",
    description:
      "Portátil e potente, esta caixa de som Bluetooth oferece um som claro e nítido onde quer que você vá. Ideal para festas, atividades ao ar livre e muito mais.",
    price: 59.99,
  },
  {
    id: "4",
    title: "Mouse Gamer",
    description:
      "Melhore sua experiência de jogo com este mouse gamer de alta precisão. Projetado ergonomicamente e construído para durar, é indispensável para qualquer jogador.",
    price: 39.99,
  },
  {
    id: "5",
    title: "Monitor 4K",
    description:
      "Desfrute de visuais impressionantes com este monitor 4K. Perfeito para jogos, trabalho ou entretenimento, oferece cores vibrantes e detalhes nítidos.",
    price: 299.99,
  },
];
