import { ResponseProduct } from "../entities";

export interface ProductRepository {
  getAll(): Promise<ResponseProduct | null>;
}
