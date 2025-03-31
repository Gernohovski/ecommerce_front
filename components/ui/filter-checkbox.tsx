import { CheckboxOptions } from "@/concepts/livros/types/types";
import { useState } from "react";
import { Checkbox } from "./checkbox";

type Props = {
  options?: CheckboxOptions[];
  filterTitle: string;
};

const FilterCheckbox: React.FC<Props> = ({ options, filterTitle }) => {
  const [expanded, setExpanded] = useState(false);
  const safeOptions = options ?? [];
  const visibleOptions = expanded ? safeOptions : safeOptions.slice(0, 7);

  return (
    <div className="flex flex-col">
      <span className="font-bold text-base mt-6 ml-4 mb-2">{filterTitle}</span>
      {visibleOptions.map((option) => (
        <label
          key={option.value}
          htmlFor={option.value}
          className="flex items-center gap-2 ml-4 mb-2 cursor-pointer"
        >
          <Checkbox id={option.value} />
          <span className="text-sm font-medium">{option.label}</span>
        </label>
      ))}
      {safeOptions.length > 7 && (
        <span
          className="text-[#7738C8] hover:underline text-sm mb-2 ml-4 self-start cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Ver Menos" : "Ver Mais"}
        </span>
      )}
    </div>
  );
};

export default FilterCheckbox;
