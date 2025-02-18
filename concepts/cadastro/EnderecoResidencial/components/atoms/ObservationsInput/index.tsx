import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";

type Props = {
  observations: string;
  setObservations: Dispatch<SetStateAction<string>>;
};

const ObservationsInput: React.FC<Props> = ({
  observations,
  setObservations,
}) => {
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setObservations: setObservationsCobranca } =
    useEnderecoCobrancaContext();
  const { setObservations: setObservationsEntrega } =
    useEnderecoEntregaContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novaObservacao = e.target.value;
    setObservations(novaObservacao);
    if (useEnderecoCobranca) {
      setObservationsCobranca(novaObservacao);
    }
    if (useEnderecoEntrega) {
      setObservationsEntrega(novaObservacao);
    }
  };
  return (
    <div>
      <Label className="text-sm">Observações</Label>
      <Input
        className="min-w-[537px] max-w-[537px]"
        placeholder="Insira as observações"
        value={observations}
        onChange={handleChange}
      ></Input>
    </div>
  );
};

export default ObservationsInput;
