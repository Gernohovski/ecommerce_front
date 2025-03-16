import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Trash } from "lucide-react";

const DisabledDeleteCartaoButton: React.FC = () => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="min-w-[98px] max-w-[98px]"
              variant={"delete_disabled"}
              asChild
              disabled={true}
            >
              <div>
                <Trash />
                <span>Excluir</span>
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Não é possível excluir o cartão de crédito principal</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default DisabledDeleteCartaoButton;
