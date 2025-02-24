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
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { useFetchListarTiposResidencia } from "@/concepts/cadastro/EnderecoResidencial/hooks/useFetchListarTiposResidencia";
import { Dispatch, SetStateAction } from "react";

type Props = {
  residenceType: string;
  setResidenceType: Dispatch<SetStateAction<string>>;
};

const ResidenceTypeSelect: React.FC<Props> = ({
  setResidenceType,
  residenceType,
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
        <SelectTrigger className="min-w-[541px] max-w-[541px] data-[placeholder]:text-[#71717A] ">
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
