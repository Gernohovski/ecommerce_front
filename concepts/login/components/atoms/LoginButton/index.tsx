import { Button } from "@/components/ui/button";
import { useFormLoginContext } from "@/concepts/login/contexts/FormLoginContext";
import { useRealizarLogin } from "@/concepts/login/hooks/useRealizarLogin";

const LoginButton: React.FC = () => {
  const mutation = useRealizarLogin();
  const { email, password: senha } = useFormLoginContext();

  const handleSubmit = () => {
    mutation.mutate({ email, senha });
  };

  return (
    <div>
      <Button className="w-[280px]" onClick={handleSubmit}>
        Fazer login
      </Button>
    </div>
  );
};

export default LoginButton;
