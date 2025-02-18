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
  residenceType: string;
  setResidenceType: Dispatch<SetStateAction<string>>;
};

const ResidenceTypeSelect: React.FC<Props> = ({
  setResidenceType,
  residenceType,
}) => {
  const isDisabled = useDisabled();
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setResidenceType: setResidenceTypeCobranca } =
    useEnderecoCobrancaContext();
  const { setResidenceType: setResidenceTypeEntrega } =
    useEnderecoEntregaContext();
  const handleChange = (value: string) => {
    setResidenceType(value);
    if (useEnderecoCobranca) {
      setResidenceTypeCobranca(value);
    }
    if (useEnderecoEntrega) {
      setResidenceTypeEntrega(value);
    }
  };
  return (
    <div>
      <Label className="text-sm">Tipo da residência *</Label>
      <Select
        onValueChange={handleChange}
        value={residenceType}
        disabled={isDisabled}
      >
        <SelectTrigger className="min-w-[537px] max-w-[537px] data-[placeholder]:text-[#71717A] ">
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

export default ResidenceTypeSelect;
