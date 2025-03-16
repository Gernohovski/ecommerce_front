import { Button } from "@/components/ui/button";
import { EnderecoPayload } from "@/concepts/minha-conta/types";
import useCadastrarEnderecoCliente from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useCadastrarEnderecoCliente";
import errorMessage, { APIError } from "@/utils/error-message";
import validateSchema, { ValidationResult } from "@/utils/validate-schema";
import { useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { cadastrarEnderecoSchema } from "../../../validations/cadastrarEnderecoValidation";

type Props = {
  isCadastrando: boolean;
  isEditando: boolean;
  setIsEditando: Dispatch<SetStateAction<boolean>>;
  setIsCadastrando: Dispatch<SetStateAction<boolean>>;
  objectToSave: EnderecoPayload;
  clearForm: () => void;
  errors: ValidationResult[];
  setErrors: Dispatch<SetStateAction<ValidationResult[]>>;
};

const SalvarEnderecoResidencialButton: React.FC<Props> = ({
  isCadastrando,
  isEditando,
  setIsEditando,
  setIsCadastrando,
  objectToSave,
  clearForm,
  errors,
  setErrors,
}) => {
  const { mutate } = useCadastrarEnderecoCliente();
  const queryClient = useQueryClient();

  const buttonTitle = useMemo(() => {
    if (isCadastrando) return "Cadastrar";
    if (isEditando) return "Salvar";
  }, [isCadastrando, isEditando]);

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const obj = objectToSave as unknown as Record<string, unknown>;
      validateSchema(cadastrarEnderecoSchema, obj, setErrors);
      if (errors.length > 0) return;
      mutate(objectToSave, {
        onSuccess: () => {
          toast.success(
            objectToSave.id
              ? "Endereço atualizado com sucesso!"
              : "Endereço cadastrado com sucesso!"
          );
          setIsEditando(false);
          setIsCadastrando(false);
          queryClient.invalidateQueries({ queryKey: ["getCliente"] });
          clearForm();
        },
        onError: (error: APIError) => {
          errorMessage(error);
        },
      });
    },
    [
      mutate,
      objectToSave,
      queryClient,
      setIsCadastrando,
      setIsEditando,
      clearForm,
      errors,
      setErrors,
    ]
  );

  return (
    <div>
      <Button
        className="min-w-[98px] max-w-[98px]"
        asChild
        onClick={handleButtonClick}
      >
        <div>
          <span>{buttonTitle}</span>
        </div>
      </Button>
    </div>
  );
};

export default SalvarEnderecoResidencialButton;
