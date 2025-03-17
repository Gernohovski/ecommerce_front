import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useMemo } from "react";
import { useSidebarNavegacaoContext } from "../../../contexts/SidebarNavegacaoContext";

const CartoesCreditoButton: React.FC = () => {
  const {
    cartoesCredito,
    setDadosBasicos,
    setSeguranca,
    setEnderecosResidenciais,
    setEnderecosCobranca,
    setEnderecosEntrega,
    setCartoesCredito,
  } = useSidebarNavegacaoContext();

  const handleClick = () => {
    setDadosBasicos(false);
    setSeguranca(false);
    setEnderecosResidenciais(false);
    setEnderecosCobranca(false);
    setEnderecosEntrega(false);
    setCartoesCredito(true);
  };

  const bgColor = useMemo(() => {
    if (cartoesCredito == false) return "";
    return "bg-[#EFE3FF]";
  }, [cartoesCredito]);

  return (
    <div className="flex justify-between items-center">
      <div
        className={`flex items-center gap-2 hover:bg-[#EFE3FF] rounded-md cursor-pointer ${bgColor}`}
      >
        <CreditCard color={"#7738C8"} size={30} />
        <Button
          id="sidebar-credit-card-button"
          asChild
          variant={"ghost"}
          className="w-[201px] justify-start"
          onClick={handleClick}
        >
          <div>
            <span className="text-base text-[#7738C8]">Cartões de crédito</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CartoesCreditoButton;
