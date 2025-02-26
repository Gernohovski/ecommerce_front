import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";

const NameInput: React.FC = () => {
  const { name, setName } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Nome *</Label>
      <Input
        className="min-w-[313px] max-w-[313px]"
        placeholder="Insira o nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
    </div>
  );
};

export default NameInput;
