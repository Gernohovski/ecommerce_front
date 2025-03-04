import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../../DadosBasicos/contexts/DadosBasicosContext";

const ConfirmPasswordInput: React.FC<{ width: string }> = ({ width }) => {
  const { confirmPassword, setConfirmPassword } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Confirmação de senha *</Label>
      <Input
        className={`min-w-[${width}px] max-w-[${width}px]`}
        placeholder="Insira senha novamente"
        value={confirmPassword}
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></Input>
    </div>
  );
};

export default ConfirmPasswordInput;
