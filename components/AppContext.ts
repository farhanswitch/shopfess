import { createContext, useContext } from "react";
import { CartItemType } from "../src/models/CartItem";
import type { ContextStateType } from "../src/models/ContextValue";

const state = {
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  handleOpenDrawer: () => {},
  handleAddToCart: (clickedItem: CartItemType, addAmount: number) => {
    console.log(`${clickedItem}${addAmount}`);
  },
  handleRemoveFromCart: (id: number) => {
    console.log(id);
  },
};
const AppContext = createContext<ContextStateType>(state);

export default AppContext;
