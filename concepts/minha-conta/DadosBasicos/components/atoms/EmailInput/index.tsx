import { Input } from "@/components/ui/input";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { Label } from "@radix-ui/react-label";

const EmailInput: React.FC = () => {
  const { email, setEmail } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">E-mail *</Label>
      <Input
        className="min-w-[258.5px] max-w-[258.5px]"
        placeholder="Insira o e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
    </div>
  );
};

export default EmailInput;
