import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";

type Props = {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
};

const CityInput: React.FC<Props> = ({ city, setCity }) => {
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setCity: setCityCobranca } = useEnderecoCobrancaContext();
  const { setCity: setCityEntrega } = useEnderecoEntregaContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novaCidade = e.target.value;
    setCity(novaCidade);
    if (useEnderecoCobranca) {
      setCityCobranca(novaCidade);
    }
    if (useEnderecoEntrega) {
      setCityEntrega(novaCidade);
    }
  };

  return (
    <div>
      <Label className="text-sm">Cidade *</Label>
      <Input
        className="min-w-[316.5px] max-w-[316.5px]"
        placeholder="Insira a cidade"
        value={city}
        onChange={handleChange}
      ></Input>
    </div>
  );
};

export default CityInput;
