import type { NextPage } from "next";
import Nav from "../components/Nav";
import Header from "../components/Header";
import CarouselComp from "../components/CarouselComp";
import TopProducts from "../components/TopProducts";
import BottomMenu from "../components/BottomMenu";
const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Header />
      <div className="max-w-5xl mx-auto">
        <CarouselComp />
      </div>
      <TopProducts />
      <BottomMenu />
    </div>
  );
};

export default Home;
