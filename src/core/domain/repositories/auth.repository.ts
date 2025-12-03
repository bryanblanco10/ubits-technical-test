import type { Login, AuthResponse } from "@/core/domain";

export interface AuthRepository {
  login: (formData: Login) => Promise<AuthResponse | null>;
}
