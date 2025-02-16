import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const TelephoneInput: React.FC = () => {
  const { telephone, setTelephone } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Telefone *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o telefone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      ></Input>
    </div>
  );
};

export default TelephoneInput;
