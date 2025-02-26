import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";

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
        className="min-w-[200px] max-w-[200px]"
        placeholder="Insira o estado"
        value={state}
        onChange={handleChange}
      ></Input>
    </div>
  );
};

export default StateInput;
