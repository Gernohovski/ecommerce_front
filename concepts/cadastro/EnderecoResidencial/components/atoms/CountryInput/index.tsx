import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";

type Props = {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  hasError?: boolean;
  tipoEndereco?: string;
};

const CountryInput: React.FC<Props> = ({
  country,
  setCountry,
  hasError,
  tipoEndereco,
}) => {
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
        id={`create-client-country-input-${tipoEndereco}`}
        className="min-w-[200px] max-w-[200px]"
        placeholder="Insira o país"
        value={country}
        onChange={handleChange}
        error={hasError}
      ></Input>
    </div>
  );
};

export default CountryInput;
