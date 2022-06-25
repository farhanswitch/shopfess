import { FC } from "react";
import Image from "next/image";

const BottomMenu: FC = () => {
  return (
    <section className="bottom-menu bg-blue-600 w-full text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 justify-between px-4 md:px-0 py-4 max-w-5xl mx-auto">
        <div className="left flex flex-col items-center ">
          <h3 className="font-semibold mb-2 text-lg">Menu</h3>
          <ul>
            <li>
              <a href="#">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
          </ul>
        </div>
        <div className="right flex flex-col items-center">
          <h3 className="font-semibold  mb-2 text-lg">Downloads Apps</h3>
          <p>Download our mobile app and get awesome offers</p>
          <div className="store flex gap-2">
            <img
              className="cursor-pointer"
              src="/app-store.png"
              width="140"
              height="10"
              alt="app-store"
            />
            <img
              className="cursor-pointer"
              src="/play-store.png"
              width="140"
              height="30"
              alt="play-store"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomMenu;
