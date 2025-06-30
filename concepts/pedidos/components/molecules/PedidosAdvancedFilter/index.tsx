"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Propriedade } from "@/concepts/cadastro/types";
import { SituacaoPedidoNomeMap } from "@/constants/situacao-pedido";
import { PlusCircle } from "lucide-react";
import * as React from "react";

interface PedidosAdvancedFilterProps {
  onFilterChange: (selectedValues: string[]) => void;
  situacoes?: Propriedade[];
}

export function PedidosAdvancedFilter({
  onFilterChange,
  situacoes,
}: PedidosAdvancedFilterProps) {
  const [selectedValues, setSelectedValues] = React.useState<Set<string>>(
    new Set()
  );
  const [searchTerm, setSearchTerm] = React.useState("");

  const filterOptions = situacoes?.map((situacao) => ({
    label: situacao.nome ? SituacaoPedidoNomeMap[situacao.nome] : "",
    value: situacao.id?.toString() ?? "",
  }));

  const filteredOptions = filterOptions?.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  React.useEffect(() => {
    onFilterChange(Array.from(selectedValues));
  }, [selectedValues, onFilterChange]);

  const handleCheckedChange = (value: string, isChecked: boolean) => {
    setSelectedValues((prev) => {
      const next = new Set(prev);
      if (isChecked) {
        next.add(value);
      } else {
        next.delete(value);
      }
      return next;
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 w-[300px] border-dashed flex items-center"
        >
          <div className="flex items-center mr-auto">
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>Situação</span>
          </div>

          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal"
              >
                {selectedValues.size}
              </Badge>
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-60 overflow-y-auto">
        <div className="p-2">
          <Input
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-8"
          />
        </div>
        <DropdownMenuSeparator />
        {filteredOptions?.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            checked={selectedValues.has(option.value)}
            onCheckedChange={(isChecked) =>
              handleCheckedChange(option.value, isChecked)
            }
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
