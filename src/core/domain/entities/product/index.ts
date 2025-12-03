export interface ParamsProduct {
  page: number;
  pageSize: number;
  name?: string;
}
export interface ResponseProduct {
  code: number;
  message: Message;
}

interface Message {
  result: Product[];
  total: number;
  currentPage: string;
  pageSize: string;
}

export interface Product {
  id: string;
  name: string;
  state: boolean;
  barCode: string;
  quantity?: number | null;
  price?: number;
  priceCurrent?: number;
  total?: number;
  listPrices: ListPrice[];
  stock: number;
  requestedQuantity?: number;
  approvedQuantity?: number;
  purchasePrice?: string | null | undefined;
}

export interface ListPrice {
  id: number;
  name: string;
  price: number;
}