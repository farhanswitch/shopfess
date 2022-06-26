import { FC, ReactNode } from "react";
import Nav from "./Nav";
import Drawer from "./Drawer";
import Cart from "./Cart";
import BottomMenu from "./BottomMenu";
import Footer from "./Footer";
import ToTop from "./ToTop";

type LayoutProps = {
  children: ReactNode;
};
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="layout">
      <Nav />
      <Drawer>
        <Cart />
      </Drawer>
      {children}
      <BottomMenu />
      <Footer />
      <ToTop />
    </main>
  );
};

export default Layout;
