import { CartItemType } from "../models/CartItem";
import axios from "axios";
export const getProducts = async (): Promise<CartItemType[]> =>
  await (
    await axios.get("https://fakestoreapi.com/products")
  ).data;
