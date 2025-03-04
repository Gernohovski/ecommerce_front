"use client";
import ConfirmPasswordInput from "../../atoms/ConfirmPasswordInput";
import PasswordInput from "../../atoms/PasswordInput";

const FirstLine: React.FC = () => {
  return (
    <div className="flex gap-6">
      <PasswordInput width="537" />
      <ConfirmPasswordInput width="537" />
    </div>
  );
};

export default FirstLine;
