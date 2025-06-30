"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Checkbox } from "./checkbox";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface MultiSelectOption {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  className?: string;
  selectAllLabel?: string;
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Selecione...",
  className,
  selectAllLabel = "Selecionar todas categorias",
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(value ?? []);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  const handleToggle = (val: string) => {
    const exists = selected.includes(val);
    const newSelected = exists
      ? selected.filter((v) => v !== val)
      : [...selected, val];
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const handleSelectAll = () => {
    if (selected.length === options.length) {
      setSelected([]);
      onChange?.([]);
    } else {
      const all = options.map((o) => o.value);
      setSelected(all);
      onChange?.(all);
    }
  };

  const isAllSelected =
    selected.length === options.length && options.length > 0;
  const isIndeterminate =
    selected.length > 0 && selected.length < options.length;

  const displayValue =
    selected.length === 0
      ? ""
      : selected.length === 1
      ? options.find((o) => o.value === selected[0])?.label || ""
      : `${selected.length} selecionadas`;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <Input
            ref={inputRef}
            readOnly
            value={displayValue}
            placeholder={placeholder}
            className={cn("w-[345.55px] pr-8 cursor-pointer", className)}
            onClick={() => setOpen(true)}
          />
          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[345.55px] p-2 space-y-2" align="start">
        <label className="flex items-center gap-2 cursor-pointer px-2 py-1">
          <Checkbox
            checked={
              isAllSelected ? true : isIndeterminate ? "indeterminate" : false
            }
            onCheckedChange={() => handleSelectAll()}
          />
          <span className="text-sm font-medium select-none">
            {selectAllLabel}
          </span>
        </label>
        <div className="max-h-60 overflow-y-auto space-y-1 pr-1">
          {options.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer px-2 py-1"
            >
              <Checkbox
                checked={selected.includes(opt.value)}
                onCheckedChange={() => handleToggle(opt.value)}
              />
              <span className="text-sm select-none">{opt.label}</span>
            </label>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
