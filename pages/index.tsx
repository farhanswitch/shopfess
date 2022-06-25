import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import Nav from "../components/Nav";
import CarouselComp from "../components/CarouselComp";
import TopProducts from "../components/TopProducts";
import BottomMenu from "../components/BottomMenu";
import Footer from "../components/Footer";
import ToTop from "../components/ToTop";
import { CartItemType } from "../src/models/CartItem";
import { getProducts } from "../src/utilities/getProducts";

export const getStaticProps = async () => {
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
  console.log(productData);
  let listTopProducts = [];
  for (let x = 0; x < 6; x++) {
    listTopProducts.push(productData[x]);
  }
  console.log(listTopProducts);
  return (
    <div>
      <Nav />

      <div className="max-w-5xl mx-auto">
        <CarouselComp />
      </div>
      <TopProducts listTopProducts={listTopProducts} />
      <BottomMenu />
      <Footer />
      <ToTop />
    </div>
  );
};

export default Home;
