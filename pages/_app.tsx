import "../styles/globals.css";
import "../styles/typing.css";
import type { AppProps } from "next/app";
import AppContext from "../components/AppContext";
import { CartItemType } from "../src/models/CartItem";
import { useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<[] | CartItemType[]>([]);
  const handleOpenDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const handleAddToCart = (
    clickedItem: CartItemType,
    addAmount: number = 1
  ) => {
    setCartItems((prev) => {
      const isItemAlreadyInTheCart = prev.find(
        (item) => item.id === clickedItem.id
      );
      if (isItemAlreadyInTheCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + addAmount }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: addAmount }];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    let newCartItems: CartItemType[] = [];
    cartItems.forEach((item) => {
      if (item.id === id) {
        if (item.amount !== 1) {
          newCartItems.push({ ...item, amount: item.amount - 1 });
        }
      } else {
        newCartItems.push({ ...item });
      }
    });
    setCartItems(newCartItems);
  };
  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isDrawerOpen,
        setIsDrawerOpen,
        cartItems,
        setCartItems,
        handleOpenDrawer,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
