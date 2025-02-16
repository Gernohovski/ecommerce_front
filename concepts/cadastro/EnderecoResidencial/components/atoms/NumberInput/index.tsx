import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  number: string;
  setNumber: Dispatch<SetStateAction<string>>;
};

const NumberInput: React.FC<Props> = ({ number, setNumber }) => {
  return (
    <div>
      <Label className="text-sm">Nº *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Nº"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></Input>
    </div>
  );
};

export default NumberInput;
