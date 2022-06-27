import { FC } from "react";

const icons = {
  jewelery: "/jewelry.jpg",
  "men's clothing": "/men-shirt.png",
  "women's clothing": "/women-shirt.png",
  electronics: "/electronics.png",
};
type CategoryCardProps = {
  title: string;
};
const CategoryCard: FC<CategoryCardProps> = ({ title }) => {
  return (
    <div className="category-card min-w-[250px] max-w-[350px] mx-auto my-3 flex gap-2 items-center px-4 py-2 shadow hover:shadow-none border border-slate-200 duration-300 rounded cursor-pointer">
      <img
        src={icons[title as keyof object]}
        alt={title}
        className="w-[36px] aspect-square"
      />
      <div className="card-title flex-1 grid place-items-center capitalize">
        {title}
      </div>
    </div>
  );
};

export default CategoryCard;
