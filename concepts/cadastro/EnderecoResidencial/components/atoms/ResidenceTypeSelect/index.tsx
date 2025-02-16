import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generos } from "@/utils/constants/genero";
import { Dispatch, SetStateAction } from "react";

type Props = {
  residenceType: string;
  setResidenceType: Dispatch<SetStateAction<string>>;
};

const ResidenceTypeSelect: React.FC<Props> = ({ setResidenceType }) => {
  const handleChange = (value: string) => {
    setResidenceType(value);
  };
  return (
    <div>
      <Label className="text-sm">Tipo da residência *</Label>
      <Select onValueChange={handleChange}>
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
