import { FC } from "react";

const Nav: FC = () => {
  return (
    <nav className="w-full bg-white/60 backdrop-blur-md sticky top-0 z-[9] shadow-lg">
      <div className="container-nav max-w-5xl mx-auto flex justify-between items-center px-4 py-2">
        <div className="brand">Shopfess</div>
        <div className="search-input relative flex gap-4">
          <button className="text-blue-700 group">
            <span className="group-hover:-translate-y-1 duration-300 block">
              Categories
            </span>
          </button>
          <input
            type="search"
            placeholder="Enter product's name"
            className="border border-slate-200 py-1 pl-3 pr-6 focus:outline-0 rounded"
          />
          <div className="search-btn">
            <span className="absolute right-6 top-[50%] -translate-y-[50%]">
              <img className="block w-4 h-4" src="/search.svg" alt="search" />
            </span>
          </div>
        </div>
        <div className="buttons flex items-center">
          <img src="/bag.svg" alt="cart" className="block w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
