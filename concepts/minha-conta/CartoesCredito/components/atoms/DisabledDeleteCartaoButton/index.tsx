import { Button } from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";
import { Trash } from "lucide-react";

const DisabledDeleteCartaoButton: React.FC = () => {
  return (
    <div>
      <Tooltip text="Não é possível excluir o cartão de crédito principal">
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
      </Tooltip>
    </div>
  );
};

export default DisabledDeleteCartaoButton;
