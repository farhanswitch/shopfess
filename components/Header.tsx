import { FC } from "react";
const Header: FC = () => {
  return (
    <header className="max-w-5xl mx-auto relative">
      <div className="w-full aspect-video bg-[url('/bg.jpg')] bg-cover text-white relative">
        <p className="mx-auto w-fit text-xl sm:text-2xl md:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text_1 font-semibold max-w-fit">Shopfess.</span>
          <span className="text_2 font-semibold max-w-fit">
            No. 1 E-Commerce in Indonesia
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
