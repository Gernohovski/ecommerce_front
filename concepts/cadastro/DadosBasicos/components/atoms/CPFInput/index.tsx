import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { withMask } from "use-mask-input";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const CPFInput: React.FC = () => {
  const { cpf, setCpf } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">CPF *</Label>
      <Input
        className="min-w-[313px] max-w-[313px]"
        placeholder="Insira o CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        ref={withMask("999.999.999-99")}
      ></Input>
    </div>
  );
};

export default CPFInput;
