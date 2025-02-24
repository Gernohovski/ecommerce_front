import { Input } from "@/components/ui/input";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { Label } from "@radix-ui/react-label";

const PasswordInput: React.FC = () => {
  const { password, setPassword } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Senha atual*</Label>
      <Input
        className="min-w-[541px] max-w-[541px]"
        placeholder="Insira a senha atual"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
    </div>
  );
};

export default PasswordInput;
