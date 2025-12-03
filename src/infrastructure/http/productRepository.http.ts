import { ProductRepository, ResponseProduct } from "@/core/domain";
import { API_ROUTES } from "@/infrastructure";
import { inject, injectable } from 'tsyringe';
import { HttpClient } from "./httpClient";

@injectable()
export class HttpProductRepository implements ProductRepository {
  constructor(
    @inject('HttpClient') private readonly httpClient: HttpClient
  ) {}
  async getAll(): Promise<ResponseProduct | null> {
    const response = await this.httpClient.get<ResponseProduct>(API_ROUTES.product.getAll);
    return response;
  }
}