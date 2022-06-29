import type { NextPage } from "next";
import Layout from "../../components/Layout";
import Product from "../../components/Product";
import { CartItemType } from "../../src/models/CartItem";
import { getProducts } from "../../src/utilities/getProducts";

export const getStaticProps = async () => {
  const productsData = await getProducts("");
  return {
    props: {
      productsData,
    },
  };
};

type ProductPageProps = {
  productsData: CartItemType[];
};

const ProductsPage: NextPage<ProductPageProps> = ({ productsData }) => {
  return (
    <Layout pageTitle="Shopfess | Products">
      <section className="all-products max-w-5xl mx-auto pt-6">
        <div className="title px-4">
          <h2 className="text-xl capitalize">All Products</h2>
        </div>
        <div className="grid-container grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-8">
          {productsData.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col w-full h-full justify-between border border-slate-200 rounded-xl shadow-md "
              >
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
