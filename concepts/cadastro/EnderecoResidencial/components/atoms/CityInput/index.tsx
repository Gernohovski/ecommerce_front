import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
};

const CityInput: React.FC<Props> = ({ city, setCity }) => {
  return (
    <div>
      <Label className="text-sm">Cidade *</Label>
      <Input
        className="min-w-[256.5px] max-w-[256.5px]"
        placeholder="Insira a cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></Input>
    </div>
  );
};

export default CityInput;
