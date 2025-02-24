import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const DeleteEnderecoButton: React.FC = () => {
  return (
    <div>
      <Button className="w-auto" variant={"ghost"} asChild>
        <Trash color="red" />
      </Button>
    </div>
  );
};

export default DeleteEnderecoButton;
