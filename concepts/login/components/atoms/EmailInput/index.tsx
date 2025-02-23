import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormLoginContext } from "@/concepts/login/contexts/FormLoginContext";

const EmailInput: React.FC = () => {
  const { email, setEmail } = useFormLoginContext();
  return (
    <div>
      <Label>E-mail: *</Label>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Insira seu e-mail"
      ></Input>
    </div>
  );
};

export default EmailInput;
