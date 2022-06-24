import type { NextPage } from "next";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-center">Hello world</h1>
      <p>shopfess</p>
      <Nav />
    </div>
  );
};

export default Home;
