import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const PrintedNameInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Nome impresso no cartão *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o nome impresso"
      ></Input>
    </div>
  );
};

export default PrintedNameInput;
