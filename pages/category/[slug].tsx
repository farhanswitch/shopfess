import type { GetStaticPaths, NextPage } from "next";
import Link from "next/link";
import Product from "../../components/Product";
import Layout from "../../components/Layout";
import { CartItemType } from "../../src/models/CartItem";
import { getDataString } from "../../src/utilities/getProducts";
import { getProducts } from "../../src/utilities/getProducts";
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getDataString("/categories");
  const slug = categories.map((category) => {
    if (/\s/.test(category)) {
      return category.split(" ").join("-");
    } else {
      return category;
    }
  });
  const paths = slug.map((data) => ({
    params: {
      slug: data,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
type CategoryStaticProps = {
  params: ParamsType;
};
type ParamsType = {
  slug: string;
};
export const getStaticProps = async (context: CategoryStaticProps) => {
  let { slug } = context.params;
  slug.includes("-") && (slug = slug.split("-").join(" "));
  const productData = await getProducts(`/category/${slug}`);
  return {
    props: {
      productData,
      slug,
    },
  };
};

type CategoryDetailProps = {
  productData: CartItemType[];
  slug: string;
};
const CategoryDetail: NextPage<CategoryDetailProps> = ({
  productData,
  slug,
}) => {
  return (
    <Layout pageTitle="Category Detail">
      <section className="all-products max-w-5xl mx-auto pt-6">
        <div className="title flex justify-between px-4">
          <h2 className="text-xl capitalize">{slug}</h2>
          <Link href={"/category"}>
            <button className="text-blue-800">All Category</button>
          </Link>
        </div>
        <div className="grid-container grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-8">
          {productData.map((product) => {
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

export default CategoryDetail;
