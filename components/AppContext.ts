import { createContext, useContext } from "react";
import type { ContextStateType } from "../src/models/ContextValue";

const state = {
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
};
const AppContext = createContext<ContextStateType>(state);

export function useAuth() {
  return useContext(AppContext);
}

export default AppContext;
