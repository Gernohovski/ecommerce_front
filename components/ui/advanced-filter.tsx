"use client";

import * as React from "react";
import { Check, PlusCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export interface Option {
  id: string;
  label: string;
}

export interface FilterColumn {
  id: string;
  title: string;
  options: Option[];
}

interface AdvancedFilterProps {
  filterColumns: FilterColumn[];
  onApply: (selectedOptions: Record<string, string[]>) => void;
  initialSelection?: Record<string, string[]>;
}

export function AdvancedFilter({
  filterColumns,
  onApply,
  initialSelection = {},
}: AdvancedFilterProps) {
  const [selectedValues, setSelectedValues] = React.useState<
    Record<string, Set<string>>
  >(() => {
    const initialState: Record<string, Set<string>> = {};
    filterColumns.forEach((column) => {
      initialState[column.id] = new Set(initialSelection[column.id] || []);
    });
    return initialState;
  });
  const [isOpen, setIsOpen] = React.useState(false);

  const handleApply = () => {
    const appliedFilters: Record<string, string[]> = {};
    for (const columnId in selectedValues) {
      if (selectedValues[columnId].size > 0) {
        appliedFilters[columnId] = Array.from(selectedValues[columnId]);
      }
    }
    onApply(appliedFilters);
    setIsOpen(false);
  };

  const handleReset = () => {
    const resetState: Record<string, Set<string>> = {};
    filterColumns.forEach((column) => {
      resetState[column.id] = new Set();
    });
    setSelectedValues(resetState);
    onApply({});
  };

  const selectedCount = Object.values(selectedValues).reduce(
    (acc, current) => acc + current.size,
    0
  );

  const getOptionLabel = (columnId: string, optionId: string) => {
    const column = filterColumns.find((c) => c.id === columnId);
    const option = column?.options.find((o) => o.id === optionId);
    return option?.label || optionId;
  };

  return (
    <div className="flex flex-col gap-2">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="h-10 border-dashed">
            <PlusCircle className="mr-2 h-4 w-4" />
            Filter
            {selectedCount > 0 && (
              <>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal"
                >
                  {selectedCount} selected
                </Badge>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search filters..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {filterColumns.map((column) => (
                <CommandGroup key={column.id} heading={column.title}>
                  {column.options.map((option) => {
                    const isSelected = selectedValues[column.id]?.has(option.id);
                    return (
                      <CommandItem
                        key={option.id}
                        onSelect={() => {
                          const newSelectedValues = { ...selectedValues };
                          const columnSelection = new Set(
                            newSelectedValues[column.id]
                          );

                          if (isSelected) {
                            columnSelection.delete(option.id);
                          } else {
                            columnSelection.add(option.id);
                          }
                          newSelectedValues[column.id] = columnSelection;
                          setSelectedValues(newSelectedValues);
                        }}
                      >
                        <div
                          className={cn(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                            isSelected
                              ? "bg-primary text-primary-foreground"
                              : "opacity-50 [&_svg]:invisible"
                          )}
                        >
                          <Check className={cn("h-4 w-4")} />
                        </div>
                        <span>{option.label}</span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              ))}
              <CommandSeparator />
              <CommandGroup>
                <CommandItem
                  onSelect={handleApply}
                  className="justify-center text-center cursor-pointer"
                >
                  Apply Filters
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selectedCount > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm text-muted-foreground">Applied filters:</p>
          {Object.entries(selectedValues).map(([columnId, options]) =>
            Array.from(options).map((optionId) => (
              <Badge
                variant="secondary"
                key={`${columnId}-${optionId}`}
                className="font-normal"
              >
                {getOptionLabel(columnId, optionId)}
              </Badge>
            ))
          )}
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-1 text-sm"
            onClick={handleReset}
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}
