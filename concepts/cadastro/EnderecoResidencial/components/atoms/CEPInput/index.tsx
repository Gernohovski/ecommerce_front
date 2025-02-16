import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
};

const CEPInput: React.FC<Props> = ({ cep, setCep }) => {
  return (
    <div>
      <Label className="text-sm">CEP *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      ></Input>
    </div>
  );
};

export default CEPInput;
