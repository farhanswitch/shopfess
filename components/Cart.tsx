import { FC } from "react";
import useGlobalContext from "../src/hooks/useGlobalContext";
import CartItem from "./CartItem";

const Cart: FC = () => {
  const { cartItems, handleOpenDrawer } = useGlobalContext();
  return (
    <aside className="w-full pt-4 p-[20px]">
      <div className="title flex items-center justify-between mb-6">
        <button onClick={handleOpenDrawer} className="text-blue-800">
          Close
        </button>
        <h2 className="text-slate-900 text-md">Shopping Cart</h2>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center py-8 text-red-600">
          There is no item in the cart
        </p>
      ) : null}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </aside>
  );
};

export default Cart;
