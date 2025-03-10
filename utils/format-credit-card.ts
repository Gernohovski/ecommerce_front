export const maskCreditCard = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})/g, "$1 ")
    .trim();
};
