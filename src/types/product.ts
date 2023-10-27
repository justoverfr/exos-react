export enum StockStatus {
  OUT_OF_STOCK = "outofstock",
  IN_STOCK = "instock",
}

export interface Product {
  name: string;
  price: number;
  stock_status: StockStatus;
}
