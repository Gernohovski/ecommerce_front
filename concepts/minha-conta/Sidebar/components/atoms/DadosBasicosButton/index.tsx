import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const DadosBasicosButton: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 hover:bg-[#EFE3FF] rounded-md cursor-pointer">
        <User className="text-[#7738C8]" size={30} />
        <Button asChild variant={"ghost"} className="w-[201px] justify-start">
          <div>
            <span className="text-base text-[#7738C8]">Dados básicos</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default DadosBasicosButton;
