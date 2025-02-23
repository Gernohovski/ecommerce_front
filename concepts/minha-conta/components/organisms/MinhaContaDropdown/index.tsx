import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleX, Package, UserRoundPen } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MinhaContaDropDown: React.FC = () => {
  const router = useRouter();

  const handleViewCienteData = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/meus-dados");
  };

  const handleViewPedidos = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/meus-pedidos");
  };

  const doLogoff = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.removeItem("cliente");
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          asChild
          className="flex flex-col h-auto gap-0 items-center hover:text-[#7738C8]"
          variant="ghost"
        >
          <div className="hover:cursor-pointer">
            <Image
              src="\icons\people.svg"
              alt="Bookly"
              width={30}
              height={30}
            ></Image>
            <span className="text-sm">Minha conta</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]">
        <DropdownMenuItem asChild onClick={handleViewCienteData}>
          <div>
            <UserRoundPen />
            <span>Meus dados</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={handleViewPedidos}>
          <div>
            <Package />
            <span>Meus pedidos</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={doLogoff}>
          <div>
            <CircleX color="red" />
            <span className="text-red-500">Sair</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MinhaContaDropDown;
