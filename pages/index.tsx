import { useMemo } from "react";
import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/Layout";
import CarouselComp from "../components/CarouselComp";
import TopProducts from "../components/TopProducts";
import { CartItemType } from "../src/models/CartItem";
import { getProducts } from "../src/utilities/getProducts";

export const getStaticProps: GetStaticProps = async () => {
  const productData = await getProducts("?limit=6");
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
  return (
    <>
      <Layout pageTitle="Shopfess | Home">
        <>
          <div className="max-w-5xl mx-auto">
            <CarouselComp />
          </div>
          <TopProducts title="Top Products" listTopProducts={productData} />
        </>
      </Layout>
    </>
  );
};

export default Home;
