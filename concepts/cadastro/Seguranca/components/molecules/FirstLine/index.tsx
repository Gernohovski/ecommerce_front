"use client";
import { LineProps } from "@/concepts/cadastro/DadosBasicos/components/molecules/FirstLine";
import ConfirmPasswordInput from "../../atoms/ConfirmPasswordInput";
import PasswordInput from "../../atoms/PasswordInput";

const FirstLine: React.FC<LineProps> = ({ errors }) => {
  return (
    <div className="flex gap-6">
      <PasswordInput
        width="537"
        label="Senha *"
        placeholder="Insira a senha"
        errors={errors}
      />
      <ConfirmPasswordInput
        width="537"
        label="Confirmação de senha *"
        placeholder="Insira a senha novamente"
        errors={errors}
      />
    </div>
  );
};

export default FirstLine;
