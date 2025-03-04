import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../../DadosBasicos/contexts/DadosBasicosContext";

const PasswordInput: React.FC<{ width: string }> = ({ width }) => {
  const { password, setPassword } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Senha *</Label>
      <Input
        className={`min-w-[${width}px] max-w-[${width}px]`}
        placeholder="Insira a senha"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
    </div>
  );
};

export default PasswordInput;
