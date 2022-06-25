import { FC } from "react";
import CarouselComp from "./CarouselComp";
const Header: FC = () => {
  return (
    <header className="max-w-5xl mx-auto py-24 relative">
      <CarouselComp />
    </header>
  );
};

export default Header;
