import { Input } from "@/components/ui/input";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { Label } from "@radix-ui/react-label";

const CurrentPasswordInput: React.FC<{ width: string }> = ({ width }) => {
  const { currentPassword, setCurrentPassword } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Senha atual*</Label>
      <Input
        className={`min-w-[${width}px] max-w-[${width}px]`}
        placeholder="Insira a senha atual"
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      ></Input>
    </div>
  );
};

export default CurrentPasswordInput;
