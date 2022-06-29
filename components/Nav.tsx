import { FC, useState, useMemo } from "react";
import { useRouter } from "next/router";
import useGlobalContext from "../src/hooks/useGlobalContext";
import { CartItemType } from "../src/models/CartItem";

const Nav: FC = () => {
  const router = useRouter();
  const { cartItems, handleOpenDrawer, searchQuery, setSearchQuery } =
    useGlobalContext();
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);
  const totalItems = useMemo(() => getTotalItems(cartItems), [cartItems]);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleOpenMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="w-full bg-white/70 backdrop-blur-md sticky top-0 z-[9] shadow-lg">
      <div className="container-nav max-w-5xl mx-auto flex flex-wrap gap-3 justify-between items-center px-4 py-2">
        <div
          className="more grid place-items-center block md:hidden"
          onClick={handleOpenMenu}
        >
          <img
            src={`${isMenuOpen ? "/ios-close-empty.svg" : "/ios-more.svg"}`}
            alt="more"
            className="w-6 h-6"
          />
        </div>
        <div className="brand w-[100px] pl-4">
          <p
            className="max-w-fit cursor-pointer"
            onClick={() => router.push("/")}
          >
            <span className="text_1 max-w-fit font-semibold bg-gradient-to-tr from-violet-600 via-sky-500 to-blue-600 text-transparent bg-clip-text text-xl">
              Shopfess.
            </span>
            <span className="text_2 max-w-fit font-semibold bg-gradient-to-bl from-purple-700 via-violet-500 to-blue-500 text-transparent bg-clip-text text-xl">
              Shopfess.
            </span>
          </p>
        </div>
        <div
          className={`md:flex search-input order-3 w-screen md:w-fit relative flex items-center justify-between md:justify-center px-6  gap-4 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <button
            className="text-blue-700 group"
            onClick={() => router.push("/category")}
          >
            <span className="group-hover:-translate-y-1 duration-300 block">
              Categories
            </span>
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/search?query=${searchQuery}`);
            }}
          >
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="search"
              placeholder="Search product"
              className="border border-slate-200 py-1 pl-3 pr-6 w-3/4 focus:outline-0 rounded"
            />
            <div
              onClick={() => router.push(`/search/query=${searchQuery}`)}
              className="search-btn absolute top-1/2 -translate-y-1/2 right-[6.5rem] md:right-[6rem]"
            >
              <span className="">
                <img
                  className="block w-4 h-4"
                  src="/ios-search.svg"
                  alt="search"
                />
              </span>
            </div>
          </form>
        </div>
        <div
          className="button md:order-3 flex items-center relative pr-8 py-4"
          onClick={handleOpenDrawer}
        >
          <img src="/ios-cart.svg" alt="cart" className="block w-7 h-7" />
          <div
            className={`w-6 h-6 text-xs rounded-full ${
              totalItems === 0 ? "hidden" : "grid"
            } place-items-center bg-blue-800 text-white absolute top-0 right-2`}
          >
            {totalItems}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
