import { Product, StockStatus } from "@/types";
import ProductsList from "@/components/productsList/productsList";

const productsList: Product[] = [
  {
    name: "Yankee With No Brim",
    price: 420,
    stock_status: StockStatus.OUT_OF_STOCK,
    img_url: "https://i.scdn.co/image/ab67616d0000b273725cb19173ba1bdb439de71c",
  },
  {
    name: "Brim With No Yankee",
    price: 69,
    stock_status: StockStatus.IN_STOCK,
    img_url:
      "https://ih1.redbubble.net/image.1177395908.7310/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  },
  {
    name: "Golden Brim",
    price: 999,
    stock_status: StockStatus.IN_STOCK,
    img_url:
      "https://img.chapeaushop.fr/Casquette-9Fifty-Junior-Golden-Yankees-by-New-Era.50285a.jpg",
  },
];

export default function ProductsPage() {
  return <ProductsList products={productsList} />;
}
