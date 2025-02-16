import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  observations: string;
  setObservations: Dispatch<SetStateAction<string>>;
};

const ObservationsInput: React.FC<Props> = ({
  observations,
  setObservations,
}) => {
  return (
    <div>
      <Label className="text-sm">Observações</Label>
      <Input
        className="min-w-[537px] max-w-[537px]"
        placeholder="Insira as observações"
        value={observations}
        onChange={(e) => setObservations(e.target.value)}
      ></Input>
    </div>
  );
};

export default ObservationsInput;
