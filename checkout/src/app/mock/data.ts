import { VideoGame } from "../model/Videogame";

export const videoGames: VideoGame[] = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    description: "A critically acclaimed action-adventure game.",
    isbn: "978-0-87424-858-2",
    price: 59.99,
    producer: "Nintendo",
    year: 2017,
    status: "available",
  },
  {
    id: 2,
    name: "Red Dead Redemption 2",
    description:
      "An epic tale of life in America at the dawn of the modern age.",
    isbn: "978-1-07476-422-1",
    price: 49.99,
    producer: "Rockstar Games",
    year: 2018,
    status: "available",
  },
  {
    id: 3,
    name: "Cyberpunk 2077",
    description: "An open-world, action-adventure story set in Night City.",
    isbn: "978-0-7409-6100-7",
    price: 39.99,
    producer: "CD Projekt",
    year: 2020,
    status: "out of stock",
  },
  {
    id: 4,
    name: "Halo Infinite",
    description: "The next chapter of the legendary franchise.",
    isbn: "978-0-7415-3157-7",
    price: 59.99,
    producer: "343 Industries",
    year: 2021,
    status: "pre-order",
  },
];