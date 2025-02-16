import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  logradouro: string;
  setLogradouro: Dispatch<SetStateAction<string>>;
};

const LogradouroInput: React.FC<Props> = ({ logradouro, setLogradouro }) => {
  return (
    <div>
      <Label className="text-sm">Logradouro *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o logradouro"
        value={logradouro}
        onChange={(e) => setLogradouro(e.target.value)}
      ></Input>
    </div>
  );
};

export default LogradouroInput;
