export function maskCartaoCredito(cardNumber: string | number): string {
  if (!!!cardNumber) return "";
  const numberStr = String(cardNumber).replace(/\D/g, "");
  if (numberStr.length < 4) return "****";
  const last4 = numberStr.slice(-4);
  const masked = last4.padStart(numberStr.length, "*");
  return masked.replace(/(.{4})/g, "$1 ").trim();
}
