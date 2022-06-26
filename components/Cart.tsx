import { FC } from "react";
import { CartItemType } from "../src/models/CartItem";
import CartItem from "./CartItem";

type CartProps = {
  cartItems: CartItemType[];
  handleAddToCart: (clickedItem: CartItemType, addAmount?: number) => void;
  handleRemoveFromCart: (id: number) => void;
  handleOpenDrawer: () => void;
};

const Cart: FC<CartProps> = ({
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
  handleOpenDrawer,
}) => (
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
      <CartItem
        key={item.id}
        item={item}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    ))}
  </aside>
);

export default Cart;
