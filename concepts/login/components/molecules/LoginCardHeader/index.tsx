import Image from "next/image";

const LoginCardHeader: React.FC = () => {
  return (
    <div className="w-full h-10 rounded-t-lg shadow-md flex items-center pl-4 gap-2">
      <Image src="/icons/bookly.svg" alt="Bookly" width={30} height={30} />
      <span>Fazer login</span>
    </div>
  );
};

export default LoginCardHeader;
