import { Input } from "@/components/ui/input";
import { useListarClienteContext } from "@/concepts/admin/contexts/ListarClienteContext";
import { maskCPF } from "@/utils/format-cpf";
import { Label } from "@radix-ui/react-label";

const CPFInput: React.FC = () => {
  const { cpf, setCpf } = useListarClienteContext();

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(maskCPF(e.target.value));
  };

  return (
    <div>
      <Label className="text-sm">CPF</Label>
      <Input
        className="min-w-[200px] max-w-[200px]"
        placeholder="Insira o CPF"
        value={cpf}
        onChange={handleCPFChange}
      ></Input>
    </div>
  );
};

export default CPFInput;
