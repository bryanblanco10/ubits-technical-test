import { ApiPath } from "@/core/domain";

export const API_VERSION = import.meta.env.VITE_API_VERSION;
export const API_ROUTES: ApiPath = {
  auth: {
    login: `/api/${API_VERSION}/auth/login`,
  },
};
