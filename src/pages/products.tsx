import { Product, StockStatus } from "@/types";
import ProductsList from "@/components/productsList/productsList";

const productsList: Product[] = [
  {
    name: "Yankee With No Brim",
    price: 420,
    stock_status: StockStatus.OUT_OF_STOCK,
  },
  {
    name: "Brim With No Yankee",
    price: 69,
    stock_status: StockStatus.IN_STOCK,
  },
];

export default function ProductsPage() {
  return <ProductsList products={productsList} />;
}
