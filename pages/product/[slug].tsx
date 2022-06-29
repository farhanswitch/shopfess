import { GetStaticPaths, NextPage } from "next";
import ProductDetail from "../../components/ProductDetail";
import { getProducts } from "../../src/utilities/getProducts";
import { CartItemType } from "../../src/models/CartItem";
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts("");
  const productSlug = products.map((product) => {
    const productId = product["id"];
    const productFirstName = product["title"].split(" ")[0];
    return `${productFirstName}-${productId}`;
  });
  const paths = productSlug.map((data) => ({
    params: {
      slug: data,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

type ParamsType = {
  slug: string;
};
type ProductStaticProps = {
  params: ParamsType;
};

export const getStaticProps = async (context: ProductStaticProps) => {
  const { slug } = context.params;
  const id = parseInt(slug.split("-")[1]);
  const thisProductData = await getProducts(`/${id}`);
  return {
    props: {
      productData: thisProductData,
    },
  };
};

type ProductDetailProps = {
  productData: CartItemType;
};

const ProductDetailPage: NextPage<ProductDetailProps> = ({ productData }) => {
  return <ProductDetail product={productData} />;
};

export default ProductDetailPage;
