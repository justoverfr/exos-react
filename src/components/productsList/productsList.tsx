import { Product, StockStatus } from "@/types";
import "./productsList.css";

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="products-list">
      {products.map((product) => (
        <div className="product-card">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}€</p>
          <p className="product-stock-status">
            {product.stock_status == StockStatus.IN_STOCK
              ? "In Stock"
              : "Out Of Stock"}
          </p>
        </div>
      ))}
    </div>
  );
}
