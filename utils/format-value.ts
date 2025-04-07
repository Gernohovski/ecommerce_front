export function formatValue(input: string): string {
  if (!!!input) return "";
  let cleaned = input.replace(/[^\d]/g, "");
  if (!cleaned) return "";
  if (cleaned.length > 5) cleaned = cleaned.slice(0, 5);
  let valor: number;
  if (cleaned.length <= 2) {
    valor = parseFloat("0." + cleaned.padStart(2, "0"));
  } else {
    const inteira = cleaned.slice(0, cleaned.length - 2);
    const decimal = cleaned.slice(-2);
    valor = parseFloat(`${inteira}.${decimal}`);
  }
  if (valor < 0.0) valor = 0.0;
  if (valor > 100) valor = 100;
  return valor.toFixed(2).replace(".", ",");
}
