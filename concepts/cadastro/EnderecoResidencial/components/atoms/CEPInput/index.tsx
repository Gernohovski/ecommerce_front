import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { maskCEP } from "@/utils/format-cep";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";

type Props = {
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
  hasError?: boolean;
};

const CEPInput: React.FC<Props> = ({ cep, setCep, hasError }) => {
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setCep: setCepCobranca } = useEnderecoCobrancaContext();
  const { setCep: setCepEntrega } = useEnderecoEntregaContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoCep = e.target.value;
    setCep(maskCEP(novoCep));
    if (useEnderecoCobranca) {
      setCepCobranca(maskCEP(novoCep));
    }
    if (useEnderecoEntrega) {
      setCepEntrega(maskCEP(novoCep));
    }
  };

  return (
    <div>
      <Label className="text-sm">CEP *</Label>
      <Input
        className="min-w-[200px] max-w-[200px]"
        placeholder="Insira o CEP"
        value={cep}
        onChange={handleChange}
        error={hasError}
      ></Input>
    </div>
  );
};

export default CEPInput;
