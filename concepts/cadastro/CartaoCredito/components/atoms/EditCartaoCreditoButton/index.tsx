import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

const EditCartaoCreditoButton: React.FC = () => {
  return (
    <div>
      <Button className="w-auto" variant={"ghost"} asChild>
        <Pencil color="#7738C8" size={8} />
      </Button>
    </div>
  );
};

export default EditCartaoCreditoButton;
