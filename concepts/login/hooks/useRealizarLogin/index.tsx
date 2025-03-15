import api from "@/lib/api";
import errorMessage, { APIError } from "@/utils/error-message";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface LoginParams {
  email: string;
  senha: string;
}

export const useRealizarLogin = () => {
  const router = useRouter();
  async function login(values: LoginParams) {
    const { data } = await api.put("/clientes/login", values);
    return data;
  }

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("cliente", data?.id);
      router.push("/");
    },
    onError: (data: APIError) => {
      errorMessage(data);
    },
  });
};
