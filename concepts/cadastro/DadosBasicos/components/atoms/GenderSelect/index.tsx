import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generos } from "@/utils/constants/genero";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const GenderSelect: React.FC = () => {
  const { setGender } = useDadosBasicosContext();

  const handleChange = (value: string) => {
    setGender(value);
  };

  return (
    <div>
      <Label className="text-sm">Gênero *</Label>
      <Select onValueChange={handleChange}>
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

export default GenderSelect;
