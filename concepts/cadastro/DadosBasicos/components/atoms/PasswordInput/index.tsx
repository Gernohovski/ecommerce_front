import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const PasswordInput: React.FC = () => {
  const { password, setPassword } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Senha *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira a senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
    </div>
  );
};

export default PasswordInput;
