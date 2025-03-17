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
import { Dispatch, SetStateAction } from "react";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";
import { useFetchListarTiposResidencia } from "../../../hooks/useFetchListarTiposResidencia";

type Props = {
  residenceType: string;
  setResidenceType: Dispatch<SetStateAction<string>>;
  hasError?: boolean;
  tipoEndereco?: string;
};

const ResidenceTypeSelect: React.FC<Props> = ({
  setResidenceType,
  residenceType,
  hasError,
  tipoEndereco,
}) => {
  const { data } = useFetchListarTiposResidencia();
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
        <SelectTrigger
          id={`create-client-residenceType-input-${tipoEndereco}`}
          className="min-w-[200px] max-w-[200px] data-[placeholder]:text-[#71717A] "
          error={hasError}
          value={residenceType}
        >
          <SelectValue placeholder="Selecione..." />
        </SelectTrigger>
        <SelectContent>
          {data?.map((tipo) => (
            <SelectItem key={String(tipo.id)} value={String(tipo.id)}>
              {tipo.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ResidenceTypeSelect;
