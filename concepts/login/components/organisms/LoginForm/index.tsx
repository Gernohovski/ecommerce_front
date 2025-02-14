import EmailInput from "../../atoms/EmailInput";
import LoginButton from "../../atoms/LoginButton";
import PasswordInput from "../../atoms/PasswordInput";
import RegisterButton from "../../atoms/RegisterButton";
import LoginCardHeader from "../../molecules/LoginCardHeader";

const LoginForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center border-2 border-gray-300 rounded-lg shadow-lg w-[350px]">
        <LoginCardHeader />
        <div className="m-6 flex flex-col justify-end gap-6">
          <EmailInput />
          <PasswordInput />
          <div className="flex flex-col justify-center items-center gap-4">
            <LoginButton />
            <RegisterButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
