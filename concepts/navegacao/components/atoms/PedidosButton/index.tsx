import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const PedidosButton: React.FC = () => {
  return (
    <Button
      asChild
      id="navbar-login-button"
      className="flex flex-col h-auto gap-0 items-center hover:text-[#7738C8]"
      variant="ghost"
    >
      <Link href="/admin/pedidos">
        <Image
          src="\icons\truck.svg"
          alt="Bookly"
          width={30}
          height={30}
        ></Image>
        <span className="text-sm">Pedidos</span>
      </Link>
    </Button>
  );
};

export default PedidosButton;
