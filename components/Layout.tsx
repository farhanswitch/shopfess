import Head from "next/head";
import { FC, ReactNode } from "react";
import Nav from "./Nav";
import Drawer from "./Drawer";
import Cart from "./Cart";
import BottomMenu from "./BottomMenu";
import Footer from "./Footer";
import ToTop from "./ToTop";

type LayoutProps = {
  children: ReactNode;
  pageTitle: string;
};
const Layout: FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <main className="layout">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="keywords" content="shopping, clothing,jewelry,e-commerce" />
        <meta name="author" content="Muhammad Farhan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="e-commerce website" />
        <title>{pageTitle}</title>
      </Head>
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
