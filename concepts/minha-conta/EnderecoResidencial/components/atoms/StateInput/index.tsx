import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

const StateInput: React.FC<Props> = ({ state, setState }) => {
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setState: setStateCobranca } = useEnderecoCobrancaContext();
  const { setState: setStateEntrega } = useEnderecoEntregaContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoEstado = e.target.value;
    setState(novoEstado);
    if (useEnderecoCobranca) {
      setStateCobranca(novoEstado);
    }
    if (useEnderecoEntrega) {
      setStateEntrega(novoEstado);
    }
  };
  return (
    <div>
      <Label className="text-sm">Estado *</Label>
      <Input
        className="min-w-[258.5px] max-w-[258.5px]"
        placeholder="Insira o estado"
        value={state}
        onChange={handleChange}
      ></Input>
    </div>
  );
};

export default StateInput;
