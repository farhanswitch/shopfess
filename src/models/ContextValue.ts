import { Dispatch, SetStateAction } from "react";
import { CartItemType } from "./CartItem";

export type ContextStateType = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: [] | CartItemType[];
  setCartItems: Dispatch<SetStateAction<[] | CartItemType[]>>;
};
export type ContextValueType = {
  state: ContextStateType;
};
