import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  number: string;
  setNumber: Dispatch<SetStateAction<string>>;
};

const NumberInput: React.FC<Props> = ({ number, setNumber }) => {
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setNumber: setNumberCobranca } = useEnderecoCobrancaContext();
  const { setNumber: setNumberEntrega } = useEnderecoEntregaContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoNumero = e.target.value;
    setNumber(novoNumero);
    if (useEnderecoCobranca) {
      setNumberCobranca(novoNumero);
    }
    if (useEnderecoEntrega) {
      setNumberEntrega(novoNumero);
    }
  };
  return (
    <div>
      <Label className="text-sm">Nº *</Label>
      <Input
        className="min-w-[258.5px] max-w-[258.5px]"
        placeholder="Nº"
        value={number}
        onChange={handleChange}
      ></Input>
    </div>
  );
};

export default NumberInput;
