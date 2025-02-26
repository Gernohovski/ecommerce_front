import { Textarea } from "@/components/ui/textarea";
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
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <Textarea
        className="min-w-[1104px] max-w-[1104px]"
        placeholder="Insira as observações"
        value={observations}
        onChange={handleChange}
      ></Textarea>
    </div>
  );
};

export default ObservationsInput;
