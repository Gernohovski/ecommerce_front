import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";
import { useFetchListarBandeirasCartao } from "../../../hooks/useFetchListarBandeirasCartao";

const CardFlagSelect: React.FC = () => {
  const { data } = useFetchListarBandeirasCartao();
  const { setCardFlag, cardFlag } = useCartaoCreditoContext();
  const handleChange = (value: string) => {
    setCardFlag(value);
  };
  return (
    <div>
      <Label className="text-sm">Bandeira do cartão *</Label>
      <Select onValueChange={handleChange} value={cardFlag}>
        <SelectTrigger className="min-w-[256.5px] max-w-[256.5px] data-[placeholder]:text-[#71717A] ">
          <SelectValue placeholder="Selecione..." />
        </SelectTrigger>
        <SelectContent>
          {data?.map((bandeira) => (
            <SelectItem key={String(bandeira.id)} value={String(bandeira.id)}>
              {bandeira.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CardFlagSelect;
