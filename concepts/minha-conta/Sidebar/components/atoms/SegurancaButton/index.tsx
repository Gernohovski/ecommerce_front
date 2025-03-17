import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useMemo } from "react";
import { useSidebarNavegacaoContext } from "../../../contexts/SidebarNavegacaoContext";

const SegurancaButton: React.FC = () => {
  const {
    seguranca,
    setDadosBasicos,
    setSeguranca,
    setEnderecosResidenciais,
    setEnderecosCobranca,
    setEnderecosEntrega,
    setCartoesCredito,
  } = useSidebarNavegacaoContext();

  const handleClick = () => {
    setDadosBasicos(false);
    setSeguranca(true);
    setEnderecosResidenciais(false);
    setEnderecosCobranca(false);
    setEnderecosEntrega(false);
    setCartoesCredito(false);
  };

  const bgColor = useMemo(() => {
    if (seguranca == false) return "";
    return "bg-[#EFE3FF]";
  }, [seguranca]);

  return (
    <div className="flex justify-between items-center">
      <div
        className={`flex items-center gap-2 hover:bg-[#EFE3FF] rounded-md cursor-pointer ${bgColor}`}
      >
        <Lock color={"#7738C8"} size={30} />
        <Button
          id="sidebar-edit-password-button"
          asChild
          variant={"ghost"}
          className="w-[201px] justify-start"
          onClick={handleClick}
        >
          <div>
            <span className="text-base text-[#7738C8]">Segurança</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SegurancaButton;
