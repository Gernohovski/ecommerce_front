import { Input } from "@/components/ui/input";
import { maskPhone } from "@/utils/format-phone";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const TelephoneInput: React.FC = () => {
  const { telephone, setTelephone } = useDadosBasicosContext();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelephone(maskPhone(e.target.value));
  };

  return (
    <div>
      <Label className="text-sm">Telefone *</Label>
      <Input
        className="min-w-[233px] max-w-[233px]"
        placeholder="Insira o telefone"
        value={telephone}
        onChange={handlePhoneChange}
      ></Input>
    </div>
  );
};

export default TelephoneInput;
