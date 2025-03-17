import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useMemo } from "react";
import { useSidebarNavegacaoContext } from "../../../contexts/SidebarNavegacaoContext";

const DadosBasicosButton: React.FC = () => {
  const {
    dadosBasicos,
    setDadosBasicos,
    setSeguranca,
    setEnderecosResidenciais,
    setEnderecosCobranca,
    setEnderecosEntrega,
    setCartoesCredito,
  } = useSidebarNavegacaoContext();

  const handleClick = () => {
    setDadosBasicos(true);
    setSeguranca(false);
    setEnderecosResidenciais(false);
    setEnderecosCobranca(false);
    setEnderecosEntrega(false);
    setCartoesCredito(false);
  };

  const bgColor = useMemo(() => {
    if (dadosBasicos == false) return "";
    return "bg-[#EFE3FF]";
  }, [dadosBasicos]);

  return (
    <div className="flex justify-between items-center">
      <div
        className={`flex items-center gap-2 hover:bg-[#EFE3FF] rounded-md cursor-pointer ${bgColor}`}
      >
        <User className="text-[#7738C8]" size={30} />
        <Button
          id="sidebar-basic-data-button"
          asChild
          variant={"ghost"}
          className="w-[201px] justify-start"
          onClick={handleClick}
        >
          <div>
            <span className="text-base text-[#7738C8]">Dados básicos</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default DadosBasicosButton;
