import type { NextPage } from "next";
import Nav from "../components/Nav";
import Header from "../components/Header";
import CarouselComp from "../components/CarouselComp";
import TopProducts from "../components/TopProducts";
import Product from "../components/Product";
const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Header />
      <div className="max-w-5xl mx-auto">
        <CarouselComp />
      </div>
      <TopProducts />
      <div className="grid-container grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-8">
        <div className="flex flex-col w-full h-full justify-between border border-slate-200 rounded-xl shadow-md ">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
