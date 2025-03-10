import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (date?: string | Date | null): string | undefined => {
  if (!date) return undefined;

  const parsedDate = date instanceof Date ? date : new Date(date + "T00:00:00");

  if (isNaN(parsedDate.getTime())) return undefined;

  return format(parsedDate, "dd/MM/yyyy", { locale: ptBR });
};
