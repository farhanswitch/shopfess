import "../styles/globals.css";
import "../src/styles/typing.css";
import type { AppProps } from "next/app";
import AppContext from "../components/AppContext";
import { CartItemType } from "../src/models/CartItem";
import { useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<[] | CartItemType[]>([]);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isDrawerOpen,
        setIsDrawerOpen,
        cartItems,
        setCartItems,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
