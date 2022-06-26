import { FC } from "react";
import Product from "./Product";
import { CartItemType } from "../src/models/CartItem";

type TopProductsProps = {
  listTopProducts: CartItemType[];
  handleAddToCart: (clickedItem: CartItemType, addAmount?: number) => void;
};
const TopProducts: FC<TopProductsProps> = ({
  listTopProducts,
  handleAddToCart,
}) => {
  return (
    <section className="top-products max-w-5xl mx-auto pt-6">
      <div className="title flex justify-between px-4">
        <h2 className="text-xl">Top Products</h2>
        <button className="text-blue-800">All Products</button>
      </div>
      <div className="grid-container grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-8">
        {listTopProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col w-full h-full justify-between border border-slate-200 rounded-xl shadow-md "
            >
              <Product product={product} handleAddToCart={handleAddToCart} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopProducts;
