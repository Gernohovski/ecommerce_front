import { Input } from "@/components/ui/input";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { Label } from "@radix-ui/react-label";

const CPFInput: React.FC = () => {
  const { cpf, setCpf } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">CPF *</Label>
      <Input
        className="min-w-[258.5px] max-w-[258.5px]"
        placeholder="Insira o CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      ></Input>
    </div>
  );
};

export default CPFInput;
