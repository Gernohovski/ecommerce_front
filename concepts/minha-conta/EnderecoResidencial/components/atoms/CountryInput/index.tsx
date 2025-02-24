import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  setCountryCobranca?: Dispatch<SetStateAction<string>>;
  useEnderecoCobranca?: boolean;
  setCountryEntrega?: Dispatch<SetStateAction<string>>;
  useEnderecoEntrega?: boolean;
};

const CountryInput: React.FC<Props> = ({ country, setCountry }) => {
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setCounty: setCountryCobranca } = useEnderecoCobrancaContext();
  const { setCounty: setCountryEntrega } = useEnderecoEntregaContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoPais = e.target.value;
    setCountry(novoPais);
    if (useEnderecoCobranca) {
      setCountryCobranca(novoPais);
    }
    if (useEnderecoEntrega) {
      setCountryEntrega(novoPais);
    }
  };
  return (
    <div>
      <Label className="text-sm">País *</Label>
      <Input
        className="min-w-[258.5px] max-w-[258.5px]"
        placeholder="Insira o país"
        value={country}
        onChange={handleChange}
      ></Input>
    </div>
  );
};

export default CountryInput;
