import { FC } from "react";
import Image from "next/image";
const Product: FC = () => {
  return (
    <div className="h-full pt-8 pb-2">
      <div className="w-full">
        <Image
          src="/payment-method.webp"
          layout="responsive"
          height="250"
          width="400"
          className="max-h-[250px] block mx-auto"
        />
      </div>
      <div className="pl-4">
        <h3 className="text-slate-800 my-2">Product's name</h3>
        <p className="text-blue-800 my-1">$ 99</p>
      </div>
      <button className="bg-sky-600 hover:bg-sky-500 text-white w-4/5 block mt-8 mx-auto px-1 py-2 rounded">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
