import { useMemo } from "react";
import { useAuth } from "../components/AppContext";
import type { GetStaticProps, NextPage } from "next";
import Nav from "../components/Nav";
import CarouselComp from "../components/CarouselComp";
import TopProducts from "../components/TopProducts";
import BottomMenu from "../components/BottomMenu";
import Footer from "../components/Footer";
import ToTop from "../components/ToTop";
import Drawer from "../components/Drawer";
import Cart from "../components/Cart";
import { CartItemType } from "../src/models/CartItem";
import { getProducts } from "../src/utilities/getProducts";

export const getStaticProps: GetStaticProps = async () => {
  const productData = await getProducts();
  return {
    props: {
      productData,
    },
  };
};

type AppIndexProps = {
  productData: CartItemType[];
};
const Home: NextPage<AppIndexProps> = ({ productData }) => {
  const { cartItems, setCartItems, isDrawerOpen, setIsDrawerOpen } = useAuth();
  useMemo(() => console.log(productData), [productData]);
  let listTopProducts = [];
  for (let x = 0; x < 6; x++) {
    listTopProducts.push(productData[x]);
  }
  useMemo(() => console.log(cartItems), [cartItems]);
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);
  const totalItems = useMemo(() => getTotalItems(cartItems), [cartItems]);
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
    <div>
      <Nav handleOpenDrawer={handleOpenDrawer} totalItems={totalItems} />
      <Drawer isOpen={isDrawerOpen}>
        <Cart
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleOpenDrawer={handleOpenDrawer}
        />
      </Drawer>
      <div className="max-w-5xl mx-auto">
        <CarouselComp />
      </div>
      <TopProducts
        handleAddToCart={handleAddToCart}
        listTopProducts={listTopProducts}
      />
      <BottomMenu />
      <Footer />
      <ToTop />
    </div>
  );
};

export default Home;
