import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import TopProducts from "../../components/TopProducts";
import { getProducts } from "../../src/utilities/getProducts";
import { CartItemType } from "../../src/models/CartItem";
export const getStaticProps = async () => {
  const products = await getProducts("");
  return {
    props: {
      products,
    },
  };
};

type SearchPageProps = {
  products: CartItemType[];
};
const SearchPage: NextPage<SearchPageProps> = ({ products }) => {
  const router = useRouter();
  let query = router.query.query ? router.query.query : "";
  if (typeof query !== "string") {
    query = query.join("");
  }
  const filteredProducts = products.filter((product) =>
    typeof query === "string"
      ? product["title"].toLowerCase().includes(query.toLowerCase())
      : null
  );

  return (
    <Layout pageTitle="Shopfess | Search Product">
      <div className="min-h-[80vh] grid">
        {filteredProducts.length > 0 ? (
          <TopProducts
            title="Search Result"
            listTopProducts={filteredProducts}
          />
        ) : (
          <h3 className="text-center text-blue-800 m-auto">
            {" "}
            There is no item with keyword {query}
          </h3>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
