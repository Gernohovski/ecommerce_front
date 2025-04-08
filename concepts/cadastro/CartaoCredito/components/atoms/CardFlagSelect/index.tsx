import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ValidationResult } from "@/utils/validate-schema";
import { useMemo } from "react";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";
import { useFetchListarBandeirasCartao } from "../../../hooks/useFetchListarBandeirasCartao";

const CardFlagSelect: React.FC<{ errors?: ValidationResult[] }> = ({
  errors,
}) => {
  const { data } = useFetchListarBandeirasCartao();
  const { setCardFlag, cardFlag } = useCartaoCreditoContext();
  const handleChange = (value: string) => {
    setCardFlag(value);
  };
  const hasError = useMemo(() => {
    return errors?.some(
      (error) =>
        (error.nomeDoCampo === "cartaoCredito[0].bandeira.id" ||
          error.nomeDoCampo === "bandeiraId") &&
        !error.isValid
    );
  }, [errors]);
  return (
    <div>
      <Label className="text-sm">Bandeira do cartão *</Label>
      <Select onValueChange={handleChange} value={cardFlag}>
        <SelectTrigger
          id="create-client-flag-select"
          className="min-w-[228.5px] max-w-[228.5px] data-[placeholder]:text-[#71717A] "
          value={cardFlag}
          error={hasError}
        >
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
