import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { withMask } from "use-mask-input";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const TelephoneInput: React.FC = () => {
  const { telephone, setTelephone } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Telefone *</Label>
      <Input
        className="min-w-[233px] max-w-[233px]"
        placeholder="Insira o telefone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        ref={withMask("9999-9999")}
      ></Input>
    </div>
  );
};

export default TelephoneInput;
