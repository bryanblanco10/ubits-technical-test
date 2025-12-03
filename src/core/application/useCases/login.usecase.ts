import type { AuthRepository, AuthResponse, Login } from "@/core/domain";
import { inject, injectable } from "tsyringe";

@injectable()
export class LoginUseCase {
  constructor(
    @inject("AuthRepository") private authRepository: AuthRepository
  ) {}

  async execute(payload: Login): Promise<AuthResponse | null> {
    const response = await this.authRepository.login(payload);

    return response;
  }
}
