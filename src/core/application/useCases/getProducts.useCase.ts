import type {
  ProductRepository,
  ResponseProduct
} from "@/core/domain";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetProductsUseCase {
  constructor(
    @inject("ProductRepository") private productRepository: ProductRepository
  ) {}

  async execute(): Promise<ResponseProduct | null> {
    const response = await this.productRepository.getAll();

    return response;
  }
}
