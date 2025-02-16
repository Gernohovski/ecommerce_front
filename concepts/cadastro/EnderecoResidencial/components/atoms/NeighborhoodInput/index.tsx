import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  neighborhood: string;
  setNeighborhood: Dispatch<SetStateAction<string>>;
};

const NeighborhoodInput: React.FC<Props> = ({
  neighborhood,
  setNeighborhood,
}) => {
  return (
    <div>
      <Label className="text-sm">Bairro *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o bairro"
        value={neighborhood}
        onChange={(e) => setNeighborhood(e.target.value)}
      ></Input>
    </div>
  );
};

export default NeighborhoodInput;
