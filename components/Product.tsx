import { FC } from "react";
import { useRouter } from "next/router";
import { CartItemType } from "../src/models/CartItem";
type ProductProps = {
  product: CartItemType;
};
const Product: FC<ProductProps> = ({ product }) => {
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push(
          `/product/${product["title"].split(" ")[0]}-${product["id"]}`
        )
      }
      className="h-full py-8 relative"
    >
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
    </div>
  );
};

export default Product;
