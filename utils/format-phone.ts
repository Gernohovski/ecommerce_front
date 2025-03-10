export const maskPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 9);

  if (digits.length === 9) {
    return digits.replace(/^(\d)(\d{4})(\d{4})/, "$1.$2-$3");
  } else if (digits.length === 8) {
    return digits.replace(/^(\d{4})(\d{4})/, "$1-$2");
  }

  return digits;
};
