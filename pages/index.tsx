import { useMemo } from "react";
import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/Layout";
import CarouselComp from "../components/CarouselComp";
import TopProducts from "../components/TopProducts";
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
  useMemo(() => console.log(productData), [productData]);
  let listTopProducts = [];
  for (let x = 0; x < 6; x++) {
    listTopProducts.push(productData[x]);
  }

  return (
    <>
      <Layout>
        <>
          <div className="max-w-5xl mx-auto">
            <CarouselComp />
          </div>
          <TopProducts listTopProducts={listTopProducts} />
        </>
      </Layout>
    </>
  );
};

export default Home;
