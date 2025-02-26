import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";
import { useMemo } from "react";
import { useSidebarNavegacaoContext } from "../../../contexts/SidebarNavegacaoContext";

const EnderecoEntregaButton: React.FC = () => {
  const {
    enderecosEntrega,
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
    setEnderecosEntrega(true);
    setCartoesCredito(false);
  };

  const bgColor = useMemo(() => {
    if (enderecosEntrega == false) return "";
    return "bg-[#EFE3FF]";
  }, [enderecosEntrega]);

  return (
    <div className="flex justify-between items-center">
      <div
        className={`flex items-center gap-2 hover:bg-[#EFE3FF] rounded-md cursor-pointer ${bgColor}`}
      >
        <Box color={"#7738C8"} size={30} />
        <Button
          asChild
          variant={"ghost"}
          className="w-[201px] justify-start"
          onClick={handleClick}
        >
          <div>
            <span className="text-base text-[#7738C8]">
              Endereços de entrega
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default EnderecoEntregaButton;
