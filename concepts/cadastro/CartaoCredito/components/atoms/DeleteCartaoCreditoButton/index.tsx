import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const DeleteCartaoCreditoButton: React.FC = () => {
  return (
    <div>
      <Button className="min-w-[98px] max-w-[98px]" variant={"ghost"} asChild>
        <Trash color="red" />
      </Button>
    </div>
  );
};

export default DeleteCartaoCreditoButton;
