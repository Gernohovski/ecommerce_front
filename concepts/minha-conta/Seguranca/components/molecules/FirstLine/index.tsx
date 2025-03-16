import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import ConfirmPasswordInput from "@/concepts/cadastro/Seguranca/components/atoms/ConfirmPasswordInput";
import PasswordInput from "@/concepts/cadastro/Seguranca/components/atoms/PasswordInput";
import CurrentPasswordInput from "../../atoms/CurrentPasswordInput";

const FirstLine: React.FC = () => {
  const { errors } = useDadosBasicosContext();
  return (
    <div className="flex gap-6">
      <CurrentPasswordInput width="353" />
      <PasswordInput
        width="353"
        label="Nova senha *"
        placeholder="Insira a nova senha"
        errors={errors}
      />
      <ConfirmPasswordInput
        width="353"
        label="Confirmação de senha *"
        placeholder="Insira novamente a nova senha"
        errors={errors}
      />
    </div>
  );
};

export default FirstLine;
