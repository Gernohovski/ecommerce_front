import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { AlertOctagon, CalendarIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export type DatePickerProps = {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  className?: string;
  maxDate?: Date;
  error?: boolean;
};

const DatePicker: React.FC<DatePickerProps> = ({
  date,
  setDate,
  className,
  maxDate,
  error,
}) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"input"}
            className={cn(
              `${className} justify-between text-left flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
              error && !date && "border-red-500 focus-visible:ring-red-500",
              !date && "text-muted-foreground"
            )}
          >
            {date ? (
              format(date, "dd/MM/yyyy", { locale: ptBR })
            ) : (
              <span>dd/mm/yyyy</span>
            )}
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            disabled={maxDate ? (date) => date > maxDate : false}
            onSelect={setDate}
            locale={ptBR}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <span className="text-xs text-red-500 absolute">
        {error && !date && (
          <div className="flex items-center gap-1">
            <AlertOctagon size={12} />
            {"Campo obrigatório"}
          </div>
        )}
      </span>
    </div>
  );
};

export default DatePicker;
