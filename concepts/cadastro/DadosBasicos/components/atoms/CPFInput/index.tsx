import { Input } from "@/components/ui/input";
import { maskCPF } from "@/utils/format-cpf";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const CPFInput: React.FC = () => {
  const { cpf, setCpf } = useDadosBasicosContext();

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(maskCPF(e.target.value));
  };

  return (
    <div>
      <Label className="text-sm">CPF *</Label>
      <Input
        className="min-w-[313px] max-w-[313px]"
        placeholder="Insira o CPF"
        value={cpf}
        onChange={handleCPFChange}
      ></Input>
    </div>
  );
};

export default CPFInput;
