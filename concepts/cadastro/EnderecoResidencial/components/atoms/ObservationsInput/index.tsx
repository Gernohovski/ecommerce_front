import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const ObservationsInput: React.FC = () => {
  return (
    <div>
      <Label className="text-sm">Observações</Label>
      <Input
        className="min-w-[537px] max-w-[537px]"
        placeholder="Insira as observações"
      ></Input>
    </div>
  );
};

export default ObservationsInput;
