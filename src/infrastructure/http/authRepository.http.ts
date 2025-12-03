import { AuthRepository, AuthResponse, Login } from "@/core/domain";
import { API_ROUTES } from "@/infrastructure";
import { inject, injectable } from 'tsyringe';
import { HttpClient } from "./httpClient";

@injectable()
export class HttpAuthRepository implements AuthRepository {
  constructor(
    @inject('HttpClient') private readonly httpClient: HttpClient
  ) {}
  async login(formData: Login): Promise<AuthResponse | null> {
    const response = await this.httpClient.post<AuthResponse>(API_ROUTES.auth.login, formData);
    return response;
  }
}