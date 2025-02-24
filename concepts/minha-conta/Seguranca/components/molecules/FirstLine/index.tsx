import ConfirmPasswordInput from "../../atoms/ConfirmPasswordInput";
import PasswordInput from "../../atoms/PasswordInput";

const FirstLine: React.FC = () => {
  return (
    <div className="flex gap-6">
      <PasswordInput />
      <ConfirmPasswordInput />
    </div>
  );
};

export default FirstLine;
