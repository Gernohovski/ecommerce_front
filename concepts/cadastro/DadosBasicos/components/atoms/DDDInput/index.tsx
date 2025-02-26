import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const DDDInput: React.FC = () => {
  const { ddd, setDdd } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">DDD *</Label>
      <Input
        className="min-w-[56px] max-w-[56px]"
        placeholder="DDD"
        value={ddd}
        onChange={(e) => setDdd(e.target.value)}
      ></Input>
    </div>
  );
};

export default DDDInput;
