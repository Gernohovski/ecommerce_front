import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
    onError: (data) => {
      toast.error(data.message);
    },
  });
};
