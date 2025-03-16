import { Button } from "@/components/ui/button";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { editarSenhaSchema } from "@/concepts/cadastro/Seguranca/validations/editarSenhaValidation";
import useEditarSenhaCliente from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useEditarSenhaCliente";
import errorMessage, { APIError } from "@/utils/error-message";
import validateSchema from "@/utils/validate-schema";
import { validatePassword } from "@/utils/validate-senha";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

const EditarSegurancaButton: React.FC = () => {
  const { currentPassword, password, confirmPassword, id, setErrors, errors } =
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
      validateSchema(
        editarSenhaSchema,
        {
          senha: currentPassword,
          senhaAtual: currentPassword,
          confirmacaoSenha: confirmPassword,
        },
        setErrors
      );
      if (errors.length > 0) return;
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
          onError: (error) => {
            errorMessage(error as APIError);
          },
        }
      );
    },
    [
      mutate,
      objectToSave,
      id,
      password,
      confirmPassword,
      router,
      setErrors,
      errors,
      currentPassword,
    ]
  );

  return (
    <Button className="min-w-[100px] max-w-[100px]" onClick={handleButtonClick}>
      Editar
    </Button>
  );
};

export default EditarSegurancaButton;
