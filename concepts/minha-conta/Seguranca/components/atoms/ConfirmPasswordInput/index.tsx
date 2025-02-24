import { Input } from "@/components/ui/input";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { Label } from "@radix-ui/react-label";

const ConfirmPasswordInput: React.FC = () => {
  const { confirmPassword, setConfirmPassword } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Confirmação de senha *</Label>
      <Input
        className="min-w-[541px] max-w-[541px]"
        placeholder="Insira senha novamente"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></Input>
    </div>
  );
};

export default ConfirmPasswordInput;
