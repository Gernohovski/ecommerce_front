import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const ConfirmPasswordInput: React.FC = () => {
  const { confirmPassword, setConfirmPassword } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Confirmação de senha *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira senha novamente"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></Input>
    </div>
  );
};

export default ConfirmPasswordInput;
