import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const DeleteCartaoButton: React.FC = () => {
  return (
    <div>
      <Button
        id="delete-cartao-button"
        className="min-w-[98px] max-w-[98px]"
        variant={"delete"}
        asChild
      >
        <div>
          <Trash />
          <span>Excluir</span>
        </div>
      </Button>
    </div>
  );
};

export default DeleteCartaoButton;
