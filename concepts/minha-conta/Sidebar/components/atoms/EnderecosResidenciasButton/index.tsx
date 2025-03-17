import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import { useMemo } from "react";
import { useSidebarNavegacaoContext } from "../../../contexts/SidebarNavegacaoContext";

const EnderecosResidenciasButton: React.FC = () => {
  const {
    enderecosResidenciais,
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
    setEnderecosResidenciais(true);
    setEnderecosCobranca(false);
    setEnderecosEntrega(false);
    setCartoesCredito(false);
  };

  const bgColor = useMemo(() => {
    if (enderecosResidenciais == false) return "";
    return "bg-[#EFE3FF]";
  }, [enderecosResidenciais]);

  return (
    <div className="flex justify-between items-center">
      <div
        className={`flex items-center gap-2 hover:bg-[#EFE3FF] rounded-md cursor-pointer ${bgColor}`}
      >
        <House color={"#7738C8"} size={30} />
        <Button
          id="sidebar-endereco-residencial-button"
          asChild
          variant={"ghost"}
          className="w-[201px] justify-start"
          onClick={handleClick}
        >
          <div>
            <span className="text-base text-[#7738C8]">
              Endereços residenciais
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default EnderecosResidenciasButton;
