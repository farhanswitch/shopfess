import { FC } from "react";
import useGlobalContext from "../src/hooks/useGlobalContext";

type DrawerProps = {
  children: JSX.Element;
};

const Drawer: FC<DrawerProps> = ({ children }) => {
  const { isDrawerOpen } = useGlobalContext();
  return (
    <div
      className={`${
        isDrawerOpen ? "fixed" : "hidden"
      } w-screen md:w-1/2 h-screen overflow-auto z-[99] top-0 right-0 bg-stone-200/90 backdrop-blur-lg `}
    >
      {children}
    </div>
  );
};

export default Drawer;
