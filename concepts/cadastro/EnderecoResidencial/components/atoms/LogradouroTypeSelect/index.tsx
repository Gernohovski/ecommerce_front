import { Label } from "@/components/ui/label";
import { useDisabled } from "@/components/ui/section";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { generos } from "@/utils/constants/genero";
import { Dispatch, SetStateAction } from "react";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";

type Props = {
  logradouroType: string;
  setLogradouroType: Dispatch<SetStateAction<string>>;
};

const LogradouroTypeSelect: React.FC<Props> = ({
  setLogradouroType,
  logradouroType,
}) => {
  const isDisabled = useDisabled();
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setTipoLogradouro: setLogradouroTypeCobranca } =
    useEnderecoCobrancaContext();
  const { setTipoLogradouro: setLogradouroTypeEntrega } =
    useEnderecoEntregaContext();
  const handleChange = (value: string) => {
    setLogradouroType(value);
    if (useEnderecoCobranca) {
      setLogradouroTypeCobranca(value);
    }
    if (useEnderecoEntrega) {
      setLogradouroTypeEntrega(value);
    }
  };
  return (
    <div>
      <Label className="text-sm">Tipo do logradouro *</Label>
      <Select
        onValueChange={handleChange}
        value={logradouroType}
        disabled={isDisabled}
      >
        <SelectTrigger className="min-w-[256.5px] max-w-[256.5px] data-[placeholder]:text-[#71717A] ">
          <SelectValue placeholder="Selecione..." />
        </SelectTrigger>
        <SelectContent>
          {generos.map((genero) => (
            <SelectItem key={genero.value} value={genero.value}>
              {genero.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LogradouroTypeSelect;
