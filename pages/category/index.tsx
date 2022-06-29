import type { GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import CategoryCard from "../../components/CategoryCard";
import { getProducts } from "../../src/utilities/getProducts";

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getProducts("/categories");
  return {
    props: {
      categories,
    },
  };
};

type CategoryPageProps = {
  categories: string[];
};
const Category: NextPage<CategoryPageProps> = ({ categories }) => {
  return (
    <Layout pageTitle="Shopfess | Category">
      <div className="min-h-[80vh]">
        <h2 className="text-2xl text-center font-semibold text-blue-800 mt-6 mb-10">
          Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-2">
          {categories.map((category, index: number) => {
            return <CategoryCard key={index} title={category} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
