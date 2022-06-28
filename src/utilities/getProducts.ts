import axios from "axios";
import { CartItemType } from "../models/CartItem";
export const getProducts = async (query?: string): Promise<CartItemType[]> =>
  await (
    await axios.get(`https://fakestoreapi.com/products${query}`)
  ).data;

export const getDataString = async (query?: string): Promise<string[]> =>
  await (
    await axios.get(`https://fakestoreapi.com/products${query}`)
  ).data;
