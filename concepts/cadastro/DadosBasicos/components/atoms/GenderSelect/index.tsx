import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";
import { useFetchListarGeneros } from "../../../hooks/useFetchListarGeneros";

const GenderSelect: React.FC = () => {
  const { data } = useFetchListarGeneros();
  const { setGender, gender } = useDadosBasicosContext();
  const handleChange = (value: string) => {
    setGender(value);
  };

  return (
    <div>
      <Label className="text-sm">Gênero *</Label>
      <Select onValueChange={handleChange} value={gender}>
        <SelectTrigger className="min-w-[200px] max-w-[200px] data-[placeholder]:text-[#71717A] ">
          <SelectValue placeholder="Selecione..." />
        </SelectTrigger>
        <SelectContent>
          {data?.map((genero) => (
            <SelectItem key={String(genero.id)} value={String(genero.id)}>
              {genero.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default GenderSelect;
