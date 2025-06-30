import { addMonths, format, isSameMonth, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type MonthRangeInputProps = {
  value?: { start: Date; end: Date };
  onChange?: (range: { start: Date; end: Date }) => void;
  placeholder?: string;
  className?: string;
};

export function MonthRangeInput({
  value,
  onChange,
  placeholder = "Selecione o período",
  className,
}: MonthRangeInputProps) {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>(value || { start: null, end: null });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value) {
      setSelectedRange(value);
    }
  }, [value]);

  const handleMonthClick = (date: Date) => {
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      setSelectedRange({ start: date, end: null });
    } else if (selectedRange.start && !selectedRange.end) {
      const start = selectedRange.start < date ? selectedRange.start : date;
      const end = selectedRange.start < date ? date : selectedRange.start;
      const newRange = { start, end };
      setSelectedRange(newRange);
      onChange?.(newRange);
      setOpen(false);
    }
  };

  const renderMonth = (date: Date) => {
    const isSelected =
      (selectedRange.start && isSameMonth(date, selectedRange.start)) ||
      (selectedRange.end && isSameMonth(date, selectedRange.end));

    const isInRange =
      selectedRange.start &&
      selectedRange.end &&
      date > selectedRange.start &&
      date < selectedRange.end;

    return (
      <div
        key={date.toString()}
        onClick={() => handleMonthClick(date)}
        className={`p-2 m-1 rounded cursor-pointer text-center text-sm ${
          isSelected ? "bg-primary text-primary-foreground text-sm" : ""
        } ${isInRange ? "bg-primary/20 text-sm" : ""}`}
      >
        {format(date, "MMM yyyy", { locale: ptBR }).replace(/^\w/, (c) =>
          c.toUpperCase()
        )}
      </div>
    );
  };

  const renderMonths = () => {
    const months = [];
    for (let i = 0; i < 12; i++) {
      months.push(new Date(currentDate.getFullYear(), i, 1));
    }
    return months.map(renderMonth);
  };

  const prevYear = () => setCurrentDate(subMonths(currentDate, 12));
  const nextYear = () => setCurrentDate(addMonths(currentDate, 12));

  const displayValue =
    selectedRange.start && selectedRange.end
      ? `${format(selectedRange.start, "MMM yyyy", {
          locale: ptBR,
        }).replace(/^\w/, (c) => c.toUpperCase())} - ${format(
          selectedRange.end,
          "MMM yyyy",
          { locale: ptBR }
        ).replace(/^\w/, (c) => c.toUpperCase())}`
      : "";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div>
          <Input
            ref={inputRef}
            readOnly
            value={displayValue}
            placeholder={placeholder}
            className={`w-[316px] ${className}`}
            onClick={() => setOpen(true)}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4" align="start">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevYear} className="p-2">
            &lt;
          </button>
          <h3 className="text-center">{format(currentDate, "yyyy")}</h3>
          <button onClick={nextYear} className="p-2">
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">{renderMonths()}</div>
      </PopoverContent>
    </Popover>
  );
}
