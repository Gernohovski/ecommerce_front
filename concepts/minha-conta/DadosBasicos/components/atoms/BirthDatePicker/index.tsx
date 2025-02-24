import DatePicker from "@/components/ui/date-picker";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

export type Props = {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
};

const BirthDateInput: React.FC<Props> = ({ date, setDate }) => {
  return (
    <div>
      <Label className="text-sm pb-0.5">Data de nascimento *</Label>
      <DatePicker
        date={date}
        setDate={setDate}
        className="min-w-[258.5px] max-w-[258.5px]"
      />
    </div>
  );
};

export default BirthDateInput;
