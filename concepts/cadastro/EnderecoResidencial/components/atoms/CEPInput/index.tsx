import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";
import { withMask } from "use-mask-input";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";

type Props = {
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
};

const CEPInput: React.FC<Props> = ({ cep, setCep }) => {
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setCep: setCepCobranca } = useEnderecoCobrancaContext();
  const { setCep: setCepEntrega } = useEnderecoEntregaContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoCep = e.target.value;
    setCep(novoCep);
    if (useEnderecoCobranca) {
      setCepCobranca(novoCep);
    }
    if (useEnderecoEntrega) {
      setCepEntrega(novoCep);
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
        ref={withMask("99999-999")}
      ></Input>
    </div>
  );
};

export default CEPInput;
