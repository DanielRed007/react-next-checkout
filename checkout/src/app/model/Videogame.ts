export interface VideoGame {
  id: number;
  name: string;
  description: string;
  isbn: string;
  price: number;
  producer: string;
  year: number;
  quantity: number;
  isInCart: boolean;
  status: "available" | "out of stock" | "pre-order";
}
