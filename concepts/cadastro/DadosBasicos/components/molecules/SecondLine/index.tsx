"use client";
import ConfirmPasswordInput from "../../atoms/ConfirmPasswordInput";
import EmailInput from "../../atoms/EmailInput";
import PasswordInput from "../../atoms/PasswordInput";
import TelephoneInput from "../../atoms/TelephoneInput";

const SecondLine: React.FC = () => {
  return (
    <div className="flex gap-6">
      <TelephoneInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
    </div>
  );
};

export default SecondLine;
