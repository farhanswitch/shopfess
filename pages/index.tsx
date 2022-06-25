import type { NextPage } from "next";
import Nav from "../components/Nav";
import Header from "../components/Header";
import CarouselComp from "../components/CarouselComp";
import TopProducts from "../components/TopProducts";
import BottomMenu from "../components/BottomMenu";
import Footer from "../components/Footer";
import ToTop from "../components/ToTop";
const Home: NextPage = () => {
  return (
    <div>
      <Nav />

      <div className="max-w-5xl mx-auto">
        <CarouselComp />
      </div>
      <TopProducts />
      <BottomMenu />
      <Footer />
      <ToTop />
    </div>
  );
};

export default Home;
