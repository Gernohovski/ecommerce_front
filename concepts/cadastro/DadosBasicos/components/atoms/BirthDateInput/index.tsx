import DatePicker from "@/components/ui/date-picker";
import { ValidationResult } from "@/utils/validate-schema";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction, useMemo } from "react";

export type Props = {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  errors?: ValidationResult[];
};

const BirthDateInput: React.FC<Props> = ({ date, setDate, errors }) => {
  const hasError = useMemo(() => {
    return errors?.some(
      (error) => error.nomeDoCampo === "dataNascimento" && !error.isValid
    );
  }, [errors]);

  return (
    <div>
      <Label className="text-sm pb-0.5">Data de nascimento *</Label>
      <DatePicker
        date={date}
        setDate={setDate}
        className="min-w-[200px] max-w-[200px]"
        maxDate={new Date()}
        error={hasError}
      />
    </div>
  );
};

export default BirthDateInput;
