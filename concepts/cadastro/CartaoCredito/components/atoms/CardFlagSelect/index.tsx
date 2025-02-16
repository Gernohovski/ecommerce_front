import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generos } from "@/utils/constants/genero";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const CardFlagSelect: React.FC = () => {
  const { setCardFlag } = useCartaoCreditoContext();
  const handleChange = (value: string) => {
    setCardFlag(value);
  };
  return (
    <div>
      <Label className="text-sm">Bandeira do cartão *</Label>
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

export default CardFlagSelect;
