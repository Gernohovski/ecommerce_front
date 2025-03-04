import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../../DadosBasicos/contexts/DadosBasicosContext";

type Props = {
  width: string;
  label: string;
  placeholder: string;
};

const PasswordInput: React.FC<Props> = ({ width, label, placeholder }) => {
  const { password, setPassword } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">{label}</Label>
      <Input
        style={{ minWidth: `${width}px`, maxWidth: `${width}px` }}
        placeholder={placeholder}
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
    </div>
  );
};

export default PasswordInput;
