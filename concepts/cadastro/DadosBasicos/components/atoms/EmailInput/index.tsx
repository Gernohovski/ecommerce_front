import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const EmailInput: React.FC = () => {
  const { email, setEmail } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">E-mail *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
    </div>
  );
};

export default EmailInput;
