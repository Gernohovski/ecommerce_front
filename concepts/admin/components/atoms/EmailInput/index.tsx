import { Input } from "@/components/ui/input";
import { useListarClienteContext } from "@/concepts/admin/contexts/ListarClienteContext";
import { Label } from "@radix-ui/react-label";

const EmailInput: React.FC = () => {
  const { email, setEmail } = useListarClienteContext();
  return (
    <div>
      <Label className="text-sm">E-mail</Label>
      <Input
        className="min-w-[261px] max-w-[261px]"
        placeholder="Insira o e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
    </div>
  );
};

export default EmailInput;
