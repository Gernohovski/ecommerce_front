import { Button } from "@/components/ui/button";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import errorMessage, { APIError } from "@/utils/error-message";
import validateSchema from "@/utils/validate-schema";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import useEditarDadosBasicos from "../../../hooks/useEditarDadosBasicos";
import { editarClienteSchema } from "../../../validations/editarClienteValidation";

const SalvarEdicaoDadosBasicosButton: React.FC = () => {
  const {
    setIsEditando,
    gender,
    name,
    birthDate,
    cpf,
    telephone,
    telephoneType,
    ddd,
    email,
    id,
    setErrors,
    errors,
  } = useDadosBasicosContext();
  const { mutate } = useEditarDadosBasicos();
  const queryClient = useQueryClient();
  const objectToSave = useMemo(() => {
    return {
      generoId: Number(gender),
      nome: name,
      dataNascimento: birthDate,
      cpf: cpf,
      telefone: telephone,
      tipoTelefoneId: Number(telephoneType),
      ddd: ddd,
      email: email,
    };
  }, [gender, name, birthDate, cpf, telephone, telephoneType, ddd, email]);

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      validateSchema(editarClienteSchema, objectToSave, setErrors);
      if (errors.length > 0) return;
      mutate(
        { id: String(id) ?? "", cliente: objectToSave },
        {
          onSuccess: () => {
            toast.success("Dados atualizados com sucesso!");
            queryClient.invalidateQueries({ queryKey: ["getCliente"] });
            setIsEditando(false);
          },
          onError: (error) => {
            errorMessage(error as APIError);
          },
        }
      );
    },
    [mutate, objectToSave, queryClient, id, setIsEditando, errors, setErrors]
  );

  return (
    <Button className="min-w-[100px] max-w-[100px]" onClick={handleButtonClick}>
      Editar
    </Button>
  );
};

export default SalvarEdicaoDadosBasicosButton;
