import { Input } from "@/components/ui/input";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { Label } from "@radix-ui/react-label";

const TelephoneInput: React.FC = () => {
  const { telephone, setTelephone } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Telefone *</Label>
      <Input
        className="min-w-[258.5px] max-w-[258.5px]"
        placeholder="Insira o telefone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      ></Input>
    </div>
  );
};

export default TelephoneInput;
