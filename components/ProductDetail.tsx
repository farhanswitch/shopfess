import { FC, useState } from "react";
import { CartItemType } from "../src/models/CartItem";
import Layout from "../components/Layout";
import useGlobalContext from "../src/hooks/useGlobalContext";

type ProductDetailProps = {
  product: CartItemType;
};
const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  const { handleAddToCart } = useGlobalContext();
  const [amount, setAmount] = useState<number>(1);
  const handlePlus = () => setAmount(amount + 1);
  const handleMin = () => (amount > 1 ? setAmount(amount - 1) : null);
  const addToCart = (amount: number) => {
    handleAddToCart(product, amount);
    setAmount(1);
  };
  return (
    <Layout pageTitle={`Product Detail | ${product["title"]}`}>
      <div className="product-detail-card max-w-5xl mx-auto overflow-hidden shadow-md py-10 px-6">
        <div className="title flex items-center justify-between px-3 mb-20">
          <h2 className="font-semibold text-md">Product Detail</h2>
          <a className="text-blue-800" href="/product">
            All Products
          </a>
        </div>
        <div className="header-card flex flex-col sm:flex-row gap-6 max-h-[80vh] pb-6">
          <img
            src={product["image"]}
            alt={product["title"]}
            className="h-[150px] sm:h-[200px] object-fit w-[130px] sm:w-[200px] block mx-auto"
          />
          <div className="title-header relative pb-[7rem] w-full sm:w-2/3 pt-6">
            <h1 className="mb-6 text-center">{product["title"]}</h1>
            <p className="text-blue-700 text-center">${product["price"]}</p>

            <div className="action w-full absolute bottom-4 grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="plusMin flex gap-8 items-center justify-center mx-auto w-fit">
                <button
                  className="bg-gray-200 text-blue-800 w-8 h-8"
                  onClick={handleMin}
                >
                  -
                </button>
                <p className="text-xl">{amount}</p>
                <button
                  className="bg-gray-200 text-blue-800 w-8 h-8"
                  onClick={handlePlus}
                >
                  +
                </button>
              </div>
              <div className="addToCart">
                <button
                  onClick={() => addToCart(amount)}
                  className="bg-blue-600 text-white px-6 py-2 rounded block mx-auto"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card-body py-6 px-4">
          <div className="desc">
            <h2 className="mb-4">Description</h2>
            <p> {product["description"]} </p>
          </div>
        </div>
        <hr />
        <div className="rating py-6 px-4">
          <h2 className="mb-6">Rating</h2>
          <p>
            {product["rating"]["rate"]} out of 5 ({product["rating"]["count"]}{" "}
            global ratings)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
