import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

const StateInput: React.FC<Props> = ({ state, setState }) => {
  return (
    <div>
      <Label className="text-sm">Estado *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o estado"
        value={state}
        onChange={(e) => setState(e.target.value)}
      ></Input>
    </div>
  );
};

export default StateInput;
