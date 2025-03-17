import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";

type Props = {
  logradouro: string;
  setLogradouro: Dispatch<SetStateAction<string>>;
  hasError?: boolean;
  tipoEndereco?: string;
};

const LogradouroInput: React.FC<Props> = ({
  logradouro,
  setLogradouro,
  hasError,
  tipoEndereco,
}) => {
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
        id={`create-client-logradouro-input-${tipoEndereco}`}
        className="min-w-[514px] max-w-[514px]"
        placeholder="Insira o logradouro"
        value={logradouro}
        onChange={handleChange}
        error={hasError}
      ></Input>
    </div>
  );
};

export default LogradouroInput;
