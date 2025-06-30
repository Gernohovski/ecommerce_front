import { useState } from 'react';
import { format, addMonths, subMonths, isSameMonth } from 'date-fns';

type MonthRangePickerProps = {
  onChange: (range: { start: Date; end: Date }) => void;
  initialRange?: { start: Date; end: Date };
};

export function MonthRangePicker({ onChange, initialRange }: MonthRangePickerProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState<{ start: Date | null; end: Date | null }>(
    initialRange || { start: null, end: null }
  );

  const handleMonthClick = (date: Date) => {
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      setSelectedRange({ start: date, end: null });
    } else if (selectedRange.start && !selectedRange.end) {
      const start = selectedRange.start < date ? selectedRange.start : date;
      const end = selectedRange.start < date ? date : selectedRange.start;
      setSelectedRange({ start, end });
      onChange({ start, end });
    }
  };

  const renderMonth = (date: Date) => {
    const isSelected = (selectedRange.start && isSameMonth(date, selectedRange.start)) ||
      (selectedRange.end && isSameMonth(date, selectedRange.end));
    
    const isInRange = selectedRange.start && selectedRange.end &&
      date > selectedRange.start && date < selectedRange.end;

    return (
      <div
        key={date.toString()}
        onClick={() => handleMonthClick(date)}
        className={`p-2 m-1 rounded cursor-pointer text-center ${isSelected ? 'bg-primary text-primary-foreground' : ''} ${isInRange ? 'bg-primary/20' : ''}`}
      >
        {format(date, 'MMM yyyy')}
      </div>
    );
  };

  const renderMonths = () => {
    const months = [];
    for (let i = -6; i <= 6; i++) {
      months.push(addMonths(currentDate, i));
    }
    return months.map(renderMonth);
  };

  return (
    <div className="border rounded p-4">
      <div className="flex justify-between mb-4">
        <button 
          onClick={() => setCurrentDate(subMonths(currentDate, 12))}
          className="p-2"
        >
          &lt;
        </button>
        <h3 className="text-center">{format(currentDate, 'yyyy')}</h3>
        <button 
          onClick={() => setCurrentDate(addMonths(currentDate, 12))}
          className="p-2"
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {renderMonths()}
      </div>
      {selectedRange.start && selectedRange.end && (
        <div className="mt-4 text-center">
          Selected: {format(selectedRange.start, 'MMM yyyy')} - {format(selectedRange.end, 'MMM yyyy')}
        </div>
      )}
    </div>
  );
}
