import { FC } from "react";

const BottomMenu: FC = () => {
  return (
    <section className="bottom-menu bg-blue-800 w-full text-white">
      <div className="container flex flex-col md:flex-row gap-4 justify-between px-0 py-4 max-w-5xl mx-auto">
        <div className="left flex flex-col w-2/3 mx-auto items-center md:items-start md:w-fit">
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
        <div className="right flex flex-col w-2/3 mx-auto items-center md:items-start md:w-fit">
          <h3 className="font-semibold  mb-2 text-lg">Downloads Apps</h3>
          <p>Download our mobile app and get awesome offers</p>
          <div className="store flex flex-col md:flex-row gap-2">
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
