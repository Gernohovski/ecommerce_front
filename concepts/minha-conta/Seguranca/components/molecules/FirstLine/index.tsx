import ConfirmPasswordInput from "@/concepts/cadastro/Seguranca/components/atoms/ConfirmPasswordInput";
import PasswordInput from "@/concepts/cadastro/Seguranca/components/atoms/PasswordInput";
import CurrentPasswordInput from "../../atoms/CurrentPasswordInput";

const FirstLine: React.FC = () => {
  return (
    <div className="flex gap-6">
      <CurrentPasswordInput width="353" />
      <PasswordInput width="353" />
      <ConfirmPasswordInput width="353" />
    </div>
  );
};

export default FirstLine;
