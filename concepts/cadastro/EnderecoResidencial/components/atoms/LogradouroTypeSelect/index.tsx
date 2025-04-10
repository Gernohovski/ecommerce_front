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
import { useFetchListarTiposLogradouro } from "../../../hooks/useFetchListarTiposLogradouro";

type Props = {
  logradouroType: string;
  setLogradouroType: Dispatch<SetStateAction<string>>;
  hasError?: boolean;
  tipoEndereco?: string;
};

const LogradouroTypeSelect: React.FC<Props> = ({
  setLogradouroType,
  logradouroType,
  hasError,
  tipoEndereco,
}) => {
  const { data } = useFetchListarTiposLogradouro();
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
        <SelectTrigger
          id={`create-client-logradouroType-input-${tipoEndereco}`}
          className="min-w-[200px] max-w-[200px] data-[placeholder]:text-[#71717A] "
          error={hasError}
          value={logradouroType}
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

export default LogradouroTypeSelect;
