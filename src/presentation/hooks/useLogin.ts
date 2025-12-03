import { LoginUseCase } from "@/core/application";
import { AuthResponse, Login, Message } from "@/core/domain";
import { container } from "@/infrastructure";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore, useGlobalStore } from "../store";
import { toastError } from "../utils/toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setIsLoading } = useGlobalStore();
  const { setLogin } = useAuthStore();
  const loginUseCase = container.resolve(LoginUseCase);
  const { mutate } = useMutation({
    mutationFn: (user: Login) => loginUseCase.execute(user),
    onSuccess: (data: AuthResponse | null) => {
      console.log("user", data);
      const result = data?.message as Message;
      setLogin(result.user, result.token);
      navigate("/client");
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
      toastError("Error de autenticación", "Usuario o contraseña incorrectos.");
    },
    networkMode: "always",
  });

  const handleLogin = (user: Login) => {
    setIsLoading(true);
    mutate(user);
  };

  return {
    handleLogin,
  };
};