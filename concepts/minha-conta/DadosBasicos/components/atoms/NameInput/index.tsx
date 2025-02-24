import { Input } from "@/components/ui/input";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { Label } from "@radix-ui/react-label";

const NameInput: React.FC = () => {
  const { name, setName } = useDadosBasicosContext();
  return (
    <div>
      <Label className="text-sm">Nome *</Label>
      <Input
        className="min-w-[541px] max-w-[514px]"
        placeholder="Insira o nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
    </div>
  );
};

export default NameInput;
