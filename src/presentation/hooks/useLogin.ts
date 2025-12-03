import { LoginUseCase } from "@/core/application";
import { AuthResponse, Login, Message } from "@/core/domain";
import { container } from "@/infrastructure";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore, useGlobalStore } from "../store";
import { toastError } from "../utils/toast";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setIsLoading } = useGlobalStore();
  const { setLogin } = useAuthStore();
  const login = useMemo(() => container.resolve(LoginUseCase), []);
  const { mutate } = useMutation({
    mutationFn: (user: Login) => login.execute(user),
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: (data: AuthResponse | null) => {
      const result = data?.message as Message;
      setLogin(result.user, result.token);
      navigate("/");
    },
    onError: () => {
      setIsLoading(false);
      toastError("Error de autenticación", "Usuario o contraseña incorrectos.");
    },
    onSettled: () => {
      setIsLoading(false);
    },
    networkMode: "always",
  });

  const handleLogin = (user: Login) => {
    mutate(user);
  };

  return {
    handleLogin,
  };
};
