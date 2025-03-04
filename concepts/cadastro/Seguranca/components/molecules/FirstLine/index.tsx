"use client";
import ConfirmPasswordInput from "../../atoms/ConfirmPasswordInput";
import PasswordInput from "../../atoms/PasswordInput";

const FirstLine: React.FC = () => {
  return (
    <div className="flex gap-6">
      <PasswordInput width="537" label="Senha *" placeholder="Insira a senha" />
      <ConfirmPasswordInput
        width="537"
        label="Confirmação de senha *"
        placeholder="Insira a senha novamente"
      />
    </div>
  );
};

export default FirstLine;
