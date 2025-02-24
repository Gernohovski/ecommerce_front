import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  logradouro: string;
  setLogradouro: Dispatch<SetStateAction<string>>;
};

const LogradouroInput: React.FC<Props> = ({ logradouro, setLogradouro }) => {
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setLogradouro: setLogradouroCobranca } = useEnderecoCobrancaContext();
  const { setLogradouro: setLogradouroEntrega } = useEnderecoEntregaContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoLogradouro = e.target.value;
    setLogradouro(novoLogradouro);
    if (useEnderecoCobranca) {
      setLogradouroCobranca(novoLogradouro);
    }
    if (useEnderecoEntrega) {
      setLogradouroEntrega(novoLogradouro);
    }
  };
  return (
    <div>
      <Label className="text-sm">Logradouro *</Label>
      <Input
        className="min-w-[258.5px] max-w-[258.5px]"
        placeholder="Insira o logradouro"
        value={logradouro}
        onChange={handleChange}
      ></Input>
    </div>
  );
};

export default LogradouroInput;
