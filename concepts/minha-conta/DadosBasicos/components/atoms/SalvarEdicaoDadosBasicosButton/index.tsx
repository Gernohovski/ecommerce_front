import { Button } from "@/components/ui/button";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import useEditarDadosBasicos from "../../../hooks/useEditarDadosBasicos";

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
    id,
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
    };
  }, [gender, name, birthDate, cpf, telephone, telephoneType, ddd]);

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutate(
        { id: String(id) ?? "", cliente: objectToSave },
        {
          onSuccess: () => {
            toast.success("Dados atualizados com sucesso!");
            queryClient.invalidateQueries({ queryKey: ["getCliente"] });
            setIsEditando(false);
          },
          onError: () => {
            toast.error("Erro ao atualizar o cliente");
          },
        }
      );
    },
    [mutate, objectToSave, queryClient, id, setIsEditando]
  );

  return (
    <Button className="min-w-[100px] max-w-[100px]" onClick={handleButtonClick}>
      Editar
    </Button>
  );
};

export default SalvarEdicaoDadosBasicosButton;
