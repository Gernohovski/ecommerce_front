import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ClientesButton: React.FC = () => {
  return (
    <Button
      asChild
      id="navbar-login-button"
      className="flex flex-col h-auto gap-0 items-center hover:text-[#7738C8]"
      variant="ghost"
    >
      <Link href="/admin/clientes">
        <Image
          src="\icons\people.svg"
          alt="Bookly"
          width={30}
          height={30}
        ></Image>
        <span className="text-sm">Clientes</span>
      </Link>
    </Button>
  );
};

export default ClientesButton;
