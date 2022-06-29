export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: rating;
};
type rating = {
  rate: number;
  count: number;
};
