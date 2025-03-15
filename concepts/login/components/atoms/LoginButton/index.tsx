import { Button } from "@/components/ui/button";
import { useFormLoginContext } from "@/concepts/login/contexts/FormLoginContext";
import { useRealizarLogin } from "@/concepts/login/hooks/useRealizarLogin";
import { loginSchema } from "@/concepts/login/validations/loginValidations";
import validateSchema from "@/utils/validate-schema";

const LoginButton: React.FC = () => {
  const mutation = useRealizarLogin();
  const { email, password: senha, setErrors, errors } = useFormLoginContext();

  const handleSubmit = () => {
    validateSchema(loginSchema, { email, senha }, setErrors);
    if (errors.length > 0) return;
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
