import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { useFetchListarTiposTelefone } from "@/concepts/cadastro/DadosBasicos/hooks/useFetchListarTiposTelefone";

const TelephoneTypeSelect: React.FC = () => {
  const { data } = useFetchListarTiposTelefone();
  const { telephoneType, setTelephoneType } = useDadosBasicosContext();

  const handleChange = (value: string) => {
    setTelephoneType(value);
  };

  return (
    <div>
      <Label className="text-sm">Tipo telefone *</Label>
      <Select onValueChange={handleChange} value={telephoneType}>
        <SelectTrigger className="min-w-[200px] max-w-[200px] data-[placeholder]:text-[#71717A] ">
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

export default TelephoneTypeSelect;
