import { Product, StockStatus } from "@/types";

interface ProductsListProps {
  products: Product[];
}

// Liste de div block with the name, price and stock_status of each product
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
