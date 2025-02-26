import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../../DadosBasicos/contexts/DadosBasicosContext";

const ConfirmPasswordInput: React.FC = () => {
  const { confirmPassword, setConfirmPassword } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Confirmação de senha *</Label>
      <Input
        className="min-w-[537px] max-w-[537px]"
        placeholder="Insira senha novamente"
        value={confirmPassword}
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></Input>
    </div>
  );
};

export default ConfirmPasswordInput;
