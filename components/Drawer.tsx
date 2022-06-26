import { FC } from "react";

type DrawerProps = {
  isOpen: boolean;
  children: JSX.Element;
};

const Drawer: FC<DrawerProps> = ({ isOpen, children }) => (
  <div
    className={`${
      isOpen ? "fixed" : "hidden"
    } w-screen md:w-1/2 h-screen overflow-auto z-[99] top-0 right-0 bg-stone-200/90 backdrop-blur-lg `}
  >
    {children}
  </div>
);

export default Drawer;
