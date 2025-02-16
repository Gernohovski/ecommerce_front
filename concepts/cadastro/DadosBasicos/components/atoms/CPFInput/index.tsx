import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const CPFInput: React.FC = () => {
  const { cpf, setCpf } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">CPF *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      ></Input>
    </div>
  );
};

export default CPFInput;
