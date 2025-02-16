import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
};

const CountryInput: React.FC<Props> = ({ country, setCountry }) => {
  return (
    <div>
      <Label className="text-sm">País *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira o país"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      ></Input>
    </div>
  );
};

export default CountryInput;
