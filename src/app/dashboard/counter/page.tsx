import { CartCounter } from "@/app/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Shopping Cart",
  description: "SEO description",
};

export default function counterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
      <CartCounter value={20} />
    </div>
  );
}
