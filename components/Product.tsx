import { FC } from "react";
import Image from "next/image";
import { CartItemType } from "../src/models/CartItem";
import useGlobalContext from "../src/hooks/useGlobalContext";
type ProductProps = {
  product: CartItemType;
};
const Product: FC<ProductProps> = ({ product }) => {
  const { handleAddToCart } = useGlobalContext();
  return (
    <div className="h-full pt-8 pb-14 relative">
      <div className="w-full">
        <img
          src={product.image}
          height="250"
          width="400"
          className=" h-[200px] sm:h-[220px] w-[40vw]  md:w-[50%] block mx-auto"
        />
      </div>
      <div className="pl-4">
        <h3 className="text-slate-800 my-2">{product.title}</h3>
        <p className="text-blue-800 my-1">${product.price}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-sky-600 hover:bg-sky-500 text-white w-4/5 block mt-8 mx-auto px-1 py-2 rounded absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
