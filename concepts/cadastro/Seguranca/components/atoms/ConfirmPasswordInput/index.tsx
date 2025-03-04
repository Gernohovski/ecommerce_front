import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../../DadosBasicos/contexts/DadosBasicosContext";

type Props = {
  width: string;
  label: string;
  placeholder: string;
};

const ConfirmPasswordInput: React.FC<Props> = ({
  width,
  label,
  placeholder,
}) => {
  const { confirmPassword, setConfirmPassword } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">{label}</Label>
      <Input
        style={{ minWidth: `${width}px`, maxWidth: `${width}px` }}
        placeholder={placeholder}
        value={confirmPassword}
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></Input>
    </div>
  );
};

export default ConfirmPasswordInput;
