import { FC } from "react";

const Nav: FC = () => {
  return (
    <nav className="w-full">
      <div className="container-nav max-w-5xl mx-auto">
        <div className="brand">Shopfess</div>
        <div className="search-input relative">
          <input type="search" placeholder="Enter product's name" />
          <div className="search-btn">
            <span>P</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
