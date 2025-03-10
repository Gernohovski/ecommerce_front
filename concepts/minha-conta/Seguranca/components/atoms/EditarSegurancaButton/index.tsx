import { Button } from "@/components/ui/button";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import useEditarSenhaCliente from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useEditarSenhaCliente";
import { validatePassword } from "@/utils/validate-senha";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

const EditarSegurancaButton: React.FC = () => {
  const { currentPassword, password, confirmPassword, id } =
    useDadosBasicosContext();
  const { mutate } = useEditarSenhaCliente();
  const router = useRouter();
  const objectToSave = useMemo(() => {
    return {
      senhaAtual: currentPassword,
      senha: password,
    };
  }, [currentPassword, password]);

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!validatePassword(password)) {
        const mensagem = `A senha deve conter: <br />- Mínimo 8 caracteres. <br />- Primeira letra maiúscula. <br />- Pelo menos 1 caractere especial.`;
        toast.error(<div dangerouslySetInnerHTML={{ __html: mensagem }} />);
        return;
      }
      if (password != confirmPassword) {
        toast.error("A senha e a confirmação de senha devem coincidir.");
        return;
      }
      mutate(
        { id: String(id) ?? "", novaSenha: objectToSave },
        {
          onSuccess: () => {
            toast.success("Senha alterada com sucesso!");
            localStorage.removeItem("cliente");
            router.push("/");
          },
          onError: () => {
            toast.error("Erro ao alterar a senha do cliente.");
          },
        }
      );
    },
    [mutate, objectToSave, id, password, confirmPassword, router]
  );

  return (
    <Button className="min-w-[100px] max-w-[100px]" onClick={handleButtonClick}>
      Editar
    </Button>
  );
};

export default EditarSegurancaButton;
