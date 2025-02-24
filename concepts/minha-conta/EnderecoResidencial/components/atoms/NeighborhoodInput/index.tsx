import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  neighborhood: string;
  setNeighborhood: Dispatch<SetStateAction<string>>;
};

const NeighborhoodInput: React.FC<Props> = ({
  neighborhood,
  setNeighborhood,
}) => {
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setNeighborhood: setNeighborhoodCobranca } =
    useEnderecoCobrancaContext();
  const { setNeighborhood: setNeighborhoodEntrega } =
    useEnderecoEntregaContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoBairro = e.target.value;
    setNeighborhood(novoBairro);
    if (useEnderecoCobranca) {
      setNeighborhoodCobranca(novoBairro);
    }
    if (useEnderecoEntrega) {
      setNeighborhoodEntrega(novoBairro);
    }
  };
  return (
    <div>
      <Label className="text-sm">Bairro *</Label>
      <Input
        className="min-w-[258.5px] max-w-[258.5px]"
        placeholder="Insira o bairro"
        value={neighborhood}
        onChange={handleChange}
      ></Input>
    </div>
  );
};

export default NeighborhoodInput;
