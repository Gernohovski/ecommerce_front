import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import { useMemo } from "react";
import { useSidebarNavegacaoContext } from "../../../contexts/SidebarNavegacaoContext";

const EnderecoCobrancaButton: React.FC = () => {
  const {
    enderecosCobranca,
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
    setEnderecosCobranca(true);
    setEnderecosEntrega(false);
    setCartoesCredito(false);
  };

  const bgColor = useMemo(() => {
    if (enderecosCobranca == false) return "";
    return "bg-[#EFE3FF]";
  }, [enderecosCobranca]);

  return (
    <div className="flex justify-between items-center">
      <div
        className={`flex items-center gap-2 hover:bg-[#EFE3FF] rounded-md cursor-pointer ${bgColor}`}
      >
        <DollarSign color={"#7738C8"} size={30} />
        <Button
          asChild
          variant={"ghost"}
          className="w-[201px] justify-start"
          onClick={handleClick}
        >
          <div>
            <span className="text-base text-[#7738C8]">
              Endereços de cobrança
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default EnderecoCobrancaButton;
